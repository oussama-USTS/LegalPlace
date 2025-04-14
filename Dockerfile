FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose port
EXPOSE 3001

# Set environment variables
ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

# Start development server
CMD ["npm", "run", "dev"] 