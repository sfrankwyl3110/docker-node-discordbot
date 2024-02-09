FROM node:20-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json .

RUN chown -R node:node /home/node/app

# RUN npm install -g n nodemon npm@10.4.0

USER node

RUN npm install

CMD [ "npm", "run", "dev"]
