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
RUN npm run build

#FROM nginx:1.15
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /app/dist/hello-world-app .
# Copy the default nginx.conf provided by tiangolo/node-frontend
#COPY /nginx.conf /etc/nginx/conf.d/default.conf
#COPY /new-nginx.conf /etc/nginx/nginx.conf
#COPY /my-nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
