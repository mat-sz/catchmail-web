import { ActionModel, EmailModel } from '../types/Models';
import { ActionType } from '../types/ActionType';
import { Store } from 'redux';

export interface StateType {
  connected: boolean;
  error: string | undefined;
  clientId: string | undefined;
  emails: EmailModel[];
}

let initialState: StateType = {
  connected: false,
  error: undefined,
  clientId: undefined,
  emails: [],
};

export type StoreType = Store<StateType, ActionModel>;

function applicationState(state = initialState, action: ActionModel) {
  const newState = { ...state };
  switch (action.type) {
    case ActionType.SET_ERROR:
      newState.error = action.value as string;
      break;
    case ActionType.DISMISS_ERROR:
      newState.error = undefined;
      break;
    case ActionType.SET_CONNECTED:
      newState.connected = action.value as boolean;
      break;
    case ActionType.SET_CLIENT_ID:
      newState.clientId = action.value as string;
      break;
    case ActionType.ADD_EMAIL:
      newState.emails = [...newState.emails, action.value];
      break;
    case ActionType.REMOVE_EMAIL:
      newState.emails = newState.emails.filter(
        email => email.id !== action.value
      );
      break;
    default:
      return state;
  }

  newState.emails = newState.emails.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });

  return newState;
}

export default applicationState;
