# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (including dev dependencies for nodemon)
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Expose the application's port
EXPOSE 3000

# Use nodemon to start the app in development mode or node for production
# CMD ["npx", "nodemon", "app.js"]  # For development
CMD ["sh", "-c", "npx nodemon app.js"]

# CMD ["node", "app.js"]  # For production