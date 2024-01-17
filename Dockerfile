FROM nginx:1.25.3-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY frontend-nginx.conf /etc/nginx/conf.d

COPY /dist/test-105 /usr/share/nginx/html

