FROM node:16-slim as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
RUN npm run build

# production env
FROM nginx:stable-alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]