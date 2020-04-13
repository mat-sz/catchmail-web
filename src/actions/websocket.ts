import { ActionModel, MessageModel } from '../types/Models';
import { ActionType } from '../types/ActionType';

export function sendMessageAction(message: MessageModel): ActionModel {
  return {
    type: ActionType.WS_SEND_MESSAGE,
    value: message,
  };
}

export function messageAction(message: MessageModel): ActionModel {
  return {
    type: ActionType.WS_MESSAGE,
    value: message,
  };
}

export function connectedAction(): ActionModel {
  return {
    type: ActionType.WS_CONNECTED,
    value: null,
  };
}

export function disconnectedAction(): ActionModel {
  return {
    type: ActionType.WS_DISCONNECTED,
    value: null,
  };
}
