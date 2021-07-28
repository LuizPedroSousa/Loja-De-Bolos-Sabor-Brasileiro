FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
COPY yarn* ./


RUN echo $API_URL

RUN npm install --force

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]