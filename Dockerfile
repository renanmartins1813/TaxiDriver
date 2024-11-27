FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Setup database
# RUN yarn db:push
# RUN yarn db:seed
# Copy the rest of your application code into the container
COPY . .

# Expose the port the app will run on
EXPOSE 8080
EXPOSE 80
# Command to run the application (adjust as per your app's start command)
CMD ["yarn", "init:dev"]

