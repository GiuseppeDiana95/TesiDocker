# Use Node 16 alpine as parent image
FROM node:16-alpine

# Change the working directory on the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory
COPY ./mirador/package.json ./mirador/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of project files into this image
COPY ./mirador .

# Expose application port
EXPOSE 3000
EXPOSE 1234

# Start the application
CMD npm run parcel