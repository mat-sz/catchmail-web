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
}

export interface ErrorMessageModel extends MessageModel {
  type: MessageType.ERROR;
  message: string;
}

export interface MailMessageModel extends MessageModel {
  type: MessageType.MAIL;
  subject?: string;
  from?: string;
  to?: string[];
  cc?: string[];
  bcc?: string[];
  date?: string;
  html?: string;
  text?: string;
}

export interface PingMessageModel extends MessageModel {
  type: MessageType.PING;
  timestamp: number;
}

export type Message =
  | WelcomeMessageModel
  | ErrorMessageModel
  | MailMessageModel
  | PingMessageModel;

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
