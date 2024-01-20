
FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

# COPY deploymentUI.yaml /app

RUN npm install

# RUN ng add @ng-bootstrap/ng-bootstrap

COPY . /app

RUN npm run build

RUN ls -l

FROM nginx:1.25.3-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY frontend-nginx.conf /etc/nginx/conf.d

COPY /dist/ui /usr/share/nginx/html

