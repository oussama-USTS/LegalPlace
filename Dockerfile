FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build application
ENV NODE_ENV=production
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"] 