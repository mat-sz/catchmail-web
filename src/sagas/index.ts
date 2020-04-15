import { put, takeEvery, select, call } from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';

import {
  ActionModel,
  EmailModel,
  PingMessageModel,
  Message,
  AuthenticationRequestMessageModel,
} from '../types/Models';
import { ActionType } from '../types/ActionType';
import { StateType } from '../reducers';
import { addEmailAction } from '../actions/emails';
import { sendMessageAction } from '../actions/websocket';
import {
  setClientIdAction,
  setConnectedAction,
  setErrorAction,
  setAuthenticatedAction,
  setAuthenticationRequiredAction,
} from '../actions/state';
import { MessageType } from '../types/MessageType';

function* message(action: ActionModel, dispatch: (action: any) => void) {
  const msg: Message = action.value as Message;

  switch (msg.type) {
    case MessageType.WELCOME:
      yield put(setClientIdAction(msg.clientId));
      yield put(setAuthenticatedAction(false));
      switch (msg.authenticationMode) {
        case 'none':
          const authMessage: AuthenticationRequestMessageModel = {
            type: MessageType.AUTHENTICATION_REQUEST,
          };
          yield put(sendMessageAction(authMessage));
          break;
        case 'secret':
          if (localStorage.getItem('catchmail_secret')) {
            const authMessage: AuthenticationRequestMessageModel = {
              type: MessageType.AUTHENTICATION_REQUEST,
              secret: localStorage.getItem('catchmail_secret') as string,
            };
            yield put(sendMessageAction(authMessage));
          } else {
            yield put(setAuthenticationRequiredAction(msg.authenticationMode));
          }
          break;
        default:
          yield put(setAuthenticationRequiredAction(msg.authenticationMode));
      }
      break;
    case MessageType.MAIL:
      const email: EmailModel = {
        id: uuid(),
        ...msg,
        date: msg.date ? new Date(msg.date) : new Date(),
        read: false,
      };

      yield put(addEmailAction(email));
      break;
    case MessageType.ERROR:
      yield put(setErrorAction(msg.message));
      break;
    case MessageType.PING:
      const pongMessage: PingMessageModel = {
        type: MessageType.PING,
        timestamp: new Date().getTime(),
      };
      yield put(sendMessageAction(pongMessage));
      break;
    case MessageType.AUTHENTICATION_RESPONSE:
      yield put(setAuthenticatedAction(msg.success));
      if (!msg.success) {
        localStorage.removeItem('catchmail_secret');
        yield put(setAuthenticationRequiredAction(msg.authenticationMode));
      }
      break;
  }
}

function* authenticate(action: ActionModel) {
  const authMessage: AuthenticationRequestMessageModel = {
    type: MessageType.AUTHENTICATION_REQUEST,
    secret: action.value as string,
  };
  localStorage.setItem('catchmail_secret', action.value);
  yield put(sendMessageAction(authMessage));
}

function* connected() {
  yield put(setConnectedAction(true));
  yield put(setAuthenticatedAction(false));
}

function* disconnected() {
  yield put(setConnectedAction(false));
}

function* updateNotificationCount() {
  const emails: EmailModel[] = (yield select(
    (state: StateType) => state.emails
  )).filter((email: EmailModel) => !email.read);

  if (emails.length > 0) {
    document.title = '(' + emails.length + ') ' + process.env.REACT_APP_TITLE;
  } else {
    document.title = process.env.REACT_APP_TITLE ?? '';
  }
}

export default function* root(dispatch: (action: any) => void) {
  yield takeEvery(ActionType.WS_MESSAGE, function* (action: ActionModel) {
    // TODO: rewrite this to avoid passing dispatch
    yield call(() => message(action, dispatch));
  });
  yield takeEvery(ActionType.WS_CONNECTED, connected);
  yield takeEvery(ActionType.WS_DISCONNECTED, disconnected);
  yield takeEvery(ActionType.AUTHENTICATE, authenticate);

  yield takeEvery(
    [ActionType.ADD_EMAIL, ActionType.REMOVE_EMAIL, ActionType.SELECT_EMAIL],
    updateNotificationCount
  );
}
