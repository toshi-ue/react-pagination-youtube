#  LTS(March, 6, 2023)
FROM node:18.14-alpine3.17
WORKDIR /frontapp

RUN apk update && \
  apk upgrade && \
  apk add --no-cache vim yarn bash

COPY . /frontapp

EXPOSE 5173
CMD [ "yarn", "dev"]
