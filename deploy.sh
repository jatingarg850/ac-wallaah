#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install
cd server && npm install
cd ..

# Build frontend
echo "🏗️ Building frontend..."
npm run build

# Copy build files to server directory
echo "📋 Copying build files..."
cp -r dist server/

# Create production env file if not exists
if [ ! -f server/.env ]; then
    echo "Creating production .env file..."
    cat > server/.env << EOL
NODE_ENV=production
PORT=5000
DB_HOST=your-rds-endpoint
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
DB_PORT=5432
JWT_SECRET=your-jwt-secret
FRONTEND_URL=http://your-domain.com
EOL
fi

echo "✅ Deployment files prepared successfully!"
echo "
Next steps:
1. Update server/.env with your production values
2. Start the server with: cd server && npm start
3. Your app will be available at http://your-domain.com

Note: Make sure to:
- Configure your EC2 security group to allow traffic on port 5000
- Set up an Elastic IP for your EC2 instance
- Configure your domain DNS to point to your EC2 IP
- Install and configure PM2 for process management
" 