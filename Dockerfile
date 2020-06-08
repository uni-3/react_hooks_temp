FROM node:12-alpine

WORKDIR /usr/app
COPY package.json /usr/app/package.json
COPY .yarnrc /usr/app/.yarnrc
COPY yarn.lock /usr/app/yarn.lock

RUN yarn install