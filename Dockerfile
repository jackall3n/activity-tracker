FROM node:10

WORKDIR /usr/src/app/client

COPY client/package.json .
COPY client/yarn.lock .

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]