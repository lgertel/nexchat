FROM node:18-slim

USER node

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

#CMD ["npm", "run", "dev"]
# CMD ["npm", "run", "start"]
