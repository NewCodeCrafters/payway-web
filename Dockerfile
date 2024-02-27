# Stage 1: Build the Angular application
FROM node:lts AS build
WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
