### STAGE 1:BUILD ###
# Use a slim Node.js image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Start application building
RUN npm run build


### STAGE 2:RUN ###
# Image provides the Nginx web server.
FROM nginx:latest

# COPY from above placeholder build paste in server location
COPY --from=build /app/dist/appointease/browser /usr/share/nginx/html/
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

# Expose the server port
EXPOSE 80

# Start the ngnix server
CMD ["nginx", "-g", "daemon off;"]