FROM node:16-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

Expose 3000

CMD ["node", "app.js"]