# Use a slim Node.js image
FROM node:18-alpine

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

# Remove the src directory
RUN rm -rf src

# Expose the port where NestJS listens (usually 3000)
EXPOSE 3000

# Start the NestJS application in production mode
CMD [ "npm", "run", "start:prod" ]