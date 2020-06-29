import { MessageType } from './MessageType';

export interface ActionModel {
  type: string;
  value: any;
}

export interface MessageModel {
  type: MessageType;
}

export interface WelcomeMessageModel extends MessageModel {
  type: MessageType.WELCOME;
  clientId: string;
  authenticationMode: string;
}

export interface ErrorMessageModel extends MessageModel {
  type: MessageType.ERROR;
  message: string;
}

export interface MailMessageModel extends MessageModel {
  messageId: string;
  type: MessageType.MAIL;
  raw?: string;
}

export interface PingMessageModel extends MessageModel {
  type: MessageType.PING;
  timestamp: number;
}

export interface AuthenticationRequestMessageModel extends MessageModel {
  type: MessageType.AUTHENTICATION_REQUEST;
  secret?: string;
}

export interface AuthenticationResponseMessageModel extends MessageModel {
  type: MessageType.AUTHENTICATION_RESPONSE;
  success: boolean;
  authenticationMode: string;
}

export type Message =
  | WelcomeMessageModel
  | ErrorMessageModel
  | MailMessageModel
  | PingMessageModel
  | AuthenticationRequestMessageModel
  | AuthenticationResponseMessageModel;

export interface EmailModel {
  id: string;
  subject?: string;
  from?: string;
  to?: string[];
  cc?: string[];
  bcc?: string[];
  date: Date;
  html?: string;
  text?: string;
  raw?: string;
  read: boolean;
}
