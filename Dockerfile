# Stage 1: Build React App
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy the built app to nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Replace default nginx config (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
