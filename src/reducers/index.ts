import { ActionModel, EmailModel } from '../types/Models';
import { ActionType } from '../types/ActionType';
import { Store } from 'redux';

export interface StateType {
  connected: boolean;
  error?: string;
  clientId?: string;
  emails: EmailModel[];
  selectedEmail?: EmailModel;
}

let initialState: StateType = {
  connected: false,
  error: undefined,
  clientId: undefined,
  emails: [],
  selectedEmail: undefined,
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
    case ActionType.SELECT_EMAIL:
      newState.selectedEmail = newState.emails.find(
        email => email.id === action.value
      );
      break;
    default:
      return state;
  }

  return newState;
}

export default applicationState;
