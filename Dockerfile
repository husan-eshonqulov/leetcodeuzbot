# Build stage
FROM node:20.16-alpine3.19 AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build


# Production stage
FROM node:20.16-alpine3.19 AS production

WORKDIR /app

COPY package*.json .

RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist

CMD [ "node", "dist/index.js" ]

