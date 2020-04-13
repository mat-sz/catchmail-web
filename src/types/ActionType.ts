export enum ActionType {
  // Application state
  SET_ERROR = 'SET_ERROR',
  SET_CONNECTED = 'SET_CONNECTED',
  SET_CLIENT_ID = 'SET_CLIENT_ID',

  // Dismiss
  DISMISS_ERROR = 'DISMISS_ERROR',

  // Web Sockets
  WS_SEND_MESSAGE = 'WS_SEND_MESSAGE',
  WS_MESSAGE = 'WS_MESSAGE',
  WS_CONNECTED = 'WS_CONNECTED',
  WS_DISCONNECTED = 'WS_DISCONNECTED',

  // Emails
  ADD_EMAIL = 'ADD_EMAIL',
  REMOVE_EMAIL = 'REMOVE_EMAIL',
  SELECT_EMAIL = 'SELECT_EMAIL',
}
