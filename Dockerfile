FROM node:16-slim

WORKDIR /app
EXPOSE 80

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]