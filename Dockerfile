FROM node:alpine as Builder

WORKDIR /usr/app

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY --from=Builder /usr/app/build /usr/share/nginx/html