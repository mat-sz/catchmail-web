import { ActionModel } from '../types/Models';
import { ActionType } from '../types/ActionType';

export function setErrorAction(error: string): ActionModel {
  return {
    type: ActionType.SET_ERROR,
    value: error,
  };
}

export function setConnectedAction(connected: boolean): ActionModel {
  return {
    type: ActionType.SET_CONNECTED,
    value: connected,
  };
}

export function setClientIdAction(id: string): ActionModel {
  return {
    type: ActionType.SET_CLIENT_ID,
    value: id,
  };
}

export function dismissErrorAction(): ActionModel {
  return {
    type: ActionType.DISMISS_ERROR,
    value: null,
  };
}
