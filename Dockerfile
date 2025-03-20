# Stage 1: Build the Angular application
FROM node:alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the Angular application with nginx
FROM nginx:alpine

COPY --from=build /app/dist/unit-converter/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]