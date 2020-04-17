FROM node:alpine as build

WORKDIR /app
ARG REACT_APP_TITLE
ARG REACT_APP_SERVER
ARG REACT_APP_USE_BROWSER_ROUTER
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app

RUN yarn install
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
