FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache curl

RUN npm install

COPY . .

RUN npm run build

ENV PORT=3001
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

EXPOSE 3001

CMD ["npm", "start"] 