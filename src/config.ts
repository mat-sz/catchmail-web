import { BrowserRouter, HashRouter } from 'react-router-dom';

export const title = process.env.REACT_APP_TITLE || 'catchmail';
export const wsServer =
  process.env.REACT_APP_SERVER ||
  'ws://' + window.location.hostname + ':5000/ws';
export const Router: any = process.env.REACT_APP_USE_BROWSER_ROUTER
  ? BrowserRouter
  : HashRouter;
