FROM node:latest

RUN mkdir -p "/app"

ADD . /app
WORKDIR /app

RUN npm config set strict-ssl false
RUN npm install
EXPOSE 80

CMD ["node", "app.js"]
