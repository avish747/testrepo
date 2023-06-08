# Stage 1
#FROM node:18.10 as node
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build --prod
# Stage 2
#FROM nginx:alpine
#COPY --from=node /app/dist/angular-app /usr/share/nginx/html

FROM node:18.10 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx:1.15
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY /nginx.conf /etc/nginx/conf.d/default.conf
