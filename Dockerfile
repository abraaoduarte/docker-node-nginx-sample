FROM node:22-alpine

COPY . /app

RUN npm install -g pnpm

WORKDIR /app

EXPOSE 8080

CMD ["pnpm", "start"]
