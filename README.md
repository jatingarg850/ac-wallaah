# AC Walla - Air Conditioner Marketplace

A full-stack web application for buying and selling air conditioners. Built with React, Node.js, and PostgreSQL.

## Features

- User authentication and authorization
- AC listing creation and management
- Browse and search AC listings
- User profile management
- Responsive design for all devices

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express
- PostgreSQL
- JWT Authentication

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ac-walla.git
cd ac-walla
```

2. Install dependencies:
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

3. Set up environment variables:
```bash
# Create .env file in server directory
cp server/.env.example server/.env
# Edit the .env file with your configuration
```

4. Start the development servers:
```bash
# Start frontend (in root directory)
npm run dev

# Start backend (in another terminal)
npm run server
```

## Production Deployment

1. Build the frontend:
```bash
npm run build
```

2. Deploy to AWS EC2:
```bash
./deploy.sh
```

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## Database Schema

The application uses PostgreSQL with the following main tables:
- users
- ac_listings
- user_profiles

## API Documentation

### Authentication Endpoints
- POST /api/auth/login
- POST /api/auth/signup

### AC Listing Endpoints
- GET /api/ac-listings
- POST /api/ac-listings
- GET /api/ac-listings/:id
- GET /api/ac-listings/user/:userId

For complete API documentation, see [API.md](API.md)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - your.email@example.com
Project Link: https://github.com/your-username/ac-walla
