FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with npm install (أكثر مرونة)
RUN npm install --production

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Production stage
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 3000

CMD ["npm", "start"]
