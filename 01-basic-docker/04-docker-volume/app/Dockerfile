FROM node:alpine

WORKDIR /app

ENV MONGO_DB_USERNAME=admin \ 
  MONGO_DB_PASSWORD=admin

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "run", "start"]