# catchmail-web

Easy to use, self-hosted e-mail sending debugging tool with a React.js web interface. Fully written in TypeScript.

## Self-hosting

A docker-compose configuration will be created once the project is stable.

Installation can be achieved without Docker as well:

> First you need to clone, build and run [catchmail-ws](https://github.com/mat-sz/catchmail-ws), read the README in catchmail-ws for more information on configuration.
>
> Then you need to clone this project, point it to the WebSockets backend (catchmail-ws) (in .env.local), build it and place it on some static file server (I use nginx for that). I also use nginx to proxy the back end through it. [Here's a guide on how to achieve that.](https://www.nginx.com/blog/websocket-nginx/)

### Environment variables

The following variables are used in the build process:

| Variable                       | Default value             | Description                                                                 |
| ------------------------------ | ------------------------- | --------------------------------------------------------------------------- |
| `REACT_APP_TITLE`              | `filedrop`                | Application title.                                                          |
| `REACT_APP_SERVER`             | `ws://[hostname]:5000/ws` | WebSockets server location.                                                 |
| `REACT_APP_USE_BROWSER_ROUTER` | `0`                       | `1` if you want the application to use BrowserRouter instead of HashRouter. |
