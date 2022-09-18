FROM node:16.5 AS builder
COPY package.json .
RUN npm install
COPY . .
RUN ./preconfig.sh


FROM node:alpine
WORKDIR /src/app/
COPY --from=builder . .
# RUN npm run data:destroy && npm run data:import
ENV NODE_ENV production
EXPOSE 8080
CMD exec npm run start