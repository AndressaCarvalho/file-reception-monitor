FROM node:20-alpine AS build

RUN apk add --no-cache bash python3 make g++

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx ng build --configuration docker

FROM nginx:alpine

COPY --from=build /app/dist/file-reception-monitor/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
