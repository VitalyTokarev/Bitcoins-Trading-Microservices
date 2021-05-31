FROM node:12.18.3

WORKDIR /trading-app/api-gateway

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]