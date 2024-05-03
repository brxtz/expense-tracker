FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/expense-tracker --configuration=$configuration

FROM nginx:alpine
COPY --from=build-stage /app/dist/expense-tracker/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
