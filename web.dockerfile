FROM node:14

WORKDIR /usr/src/app

COPY ./web/package.json ./
COPY ./web/yarn.lock ./

RUN yarn

COPY ./web .
# COPY .env.production .env

RUN yarn build

ENV NODE_ENV production

ENV PORT 3000

EXPOSE 3000
CMD [ "yarn", "start" ]