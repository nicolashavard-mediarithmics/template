FROM node:12.16.0 as build

WORKDIR /app
COPY . /app

COPY ./config/.npmrc /app/.npmrc

RUN npm install --production

FROM node:12.16.0-alpine
WORKDIR /app
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/config/.env.sample /app/config/.env.sample
COPY --from=build /app/build /app/build
COPY --from=build /app/node_modules /app/node_modules

CMD ["npm", "start"]