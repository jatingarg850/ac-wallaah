# AC Walla Backend Server

This is the backend server for the AC Walla marketplace application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Create .env file
cp .env.example .env
# Edit .env with your values
```

Required environment variables:
- `PORT`: Server port (default: 5000)
- `DATABASE_URL`: Neon PostgreSQL connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `NODE_ENV`: 'development' or 'production'
- `FRONTEND_URL`: Frontend application URL

## Database

The application uses Neon PostgreSQL. Connection string format:
```
postgresql://neondb_owner:password@host/neondb?sslmode=require
```

## API Routes

### Authentication
- POST `/api/auth/login`: User login
- POST `/api/auth/signup`: User registration

### AC Listings
- GET `/api/ac-listings`: Get all listings
- GET `/api/ac-listings/:id`: Get single listing
- GET `/api/ac-listings/user/:userId`: Get user's listings
- POST `/api/ac-listings`: Create new listing

### Users
- GET `/api/users/profile`: Get user profile
- PUT `/api/users/profile`: Update user profile

## Running the Server

Development:
```bash
npm run dev
```

Production:
```bash
npm start
```

## Error Handling

The server implements global error handling and proper HTTP status codes for all responses.

## Security

- CORS configuration for frontend access
- JWT authentication
- Input validation
- SQL injection protection
- Rate limiting (in production)
