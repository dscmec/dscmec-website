FROM node:16-slim

WORKDIR /app
EXPOSE 80

RUN bash -c "apt update -y && apt install git -y && apt clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp"
RUN git clone https://github.com/dscmec/dscmec-website.git . && \
    npm install -g --force nodemon

COPY .env .

RUN npm install

CMD nodemon ./index.js & npm start