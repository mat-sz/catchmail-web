import { ActionModel, EmailModel } from '../types/Models';
import { ActionType } from '../types/ActionType';

export function addEmailAction(email: EmailModel): ActionModel {
  return {
    type: ActionType.ADD_EMAIL,
    value: email,
  };
}

export function removeEmailAction(emailId: string): ActionModel {
  return {
    type: ActionType.REMOVE_EMAIL,
    value: emailId,
  };
}

export function selectEmailAction(emailId: string): ActionModel {
  return {
    type: ActionType.SELECT_EMAIL,
    value: emailId,
  };
}
