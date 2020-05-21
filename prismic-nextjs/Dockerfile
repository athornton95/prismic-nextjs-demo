FROM node:10.15.1-alpine

# Create nectar directory
WORKDIR /usr/src/prismic-nextjs

# Initialize env variables
ARG NPM_TOKEN

# Install root dependencies
COPY package*.json ./
COPY .npmrc ./
RUN npm install --loglevel error

# Bundle app source
COPY . .

# Build app
RUN npm run build

EXPOSE 3001
CMD [ "npm", "start" ]
