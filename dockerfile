# Use a lightweight Node.js base image
FROM node:18-alpine

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Install a lightweight web server
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build"]
