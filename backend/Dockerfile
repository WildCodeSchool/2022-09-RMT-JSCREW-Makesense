FROM node:16.14

WORKDIR /usr/src/app

ARG DB_HOST=${DB_HOST}
ENV DB_HOST=${DB_HOST}
ARG DB_USER=${DB_USER}
ENV DB_USER=${DB_USER}
ARG DB_PASSWORD=${DB_PASSWORD}
ENV DB_PASSWORD=${DB_PASSWORD}
ARG DB_NAME=${DB_NAME}
ENV DB_NAME=${DB_NAME}
ARG JWT_AUTH_SECRET=${JWT_AUTH_SECRET}
ENV JWT_AUTH_SECRET=${JWT_AUTH_SECRET}

COPY ./backend .

RUN npm install

CMD [ "npm", "start" ]
