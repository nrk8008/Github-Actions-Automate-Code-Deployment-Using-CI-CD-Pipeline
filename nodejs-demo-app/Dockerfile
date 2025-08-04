# Use official Node.js base image
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 3000


CMD ["node", "app.js"]

