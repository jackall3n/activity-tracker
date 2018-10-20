FROM node:10

WORKDIR /usr/src/app/client

EXPOSE 3000

CMD ["yarn", "start"]