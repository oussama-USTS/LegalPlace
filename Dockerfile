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
EXPOSE 3001

# Set environment variables
ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

# Start application
CMD ["npm", "start"] 