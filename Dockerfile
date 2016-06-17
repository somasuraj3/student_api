FROM node:latest

RUN mkdir -p "/app"

ADD . /app
WORKDIR /app
ENV DBURL ec2-54-242-156-243.compute-1.amazonaws.com
RUN npm config set strict-ssl false
RUN npm install
EXPOSE 80

CMD ["node", "app.js"]
