# Fullstack Auth App

A full-stack authentication application with daily quotes/affirmations feature, built with React frontend and Node.js/Express backend.

## Features

- User authentication (register/login)
- JWT-based authorization
- Daily quotes and affirmations
- MongoDB database
- RESTful API
- Responsive React frontend

## Tech Stack

**Frontend:**
- React 18
- Vite
- React Router
- Axios
- CSS3

**Backend:**
- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/sanikajumde05/fullstack-auth-app.git
cd fullstack-auth-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/daily-quotes
JWT_SECRET=your_jwt_secret_key_here_change_in_production
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5001/api
```

## Running the Application

### Start MongoDB

Make sure MongoDB is running on your system:

```bash
# macOS with Homebrew
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Or use MongoDB Atlas cloud database
```

### Start Backend Server

```bash
cd backend
npm run dev
```

Backend will run on http://localhost:5001

### Start Frontend Development Server

```bash
cd frontend
npm run dev
```

Frontend will run on http://localhost:3000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Quotes
- `GET /api/quotes` - Get all quotes
- `POST /api/quotes` - Create new quote (authenticated)
- `PUT /api/quotes/:id` - Update quote (authenticated)
- `DELETE /api/quotes/:id` - Delete quote (authenticated)

## Project Structure

```
fullstack-auth-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── quoteRoutes.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5001)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens

### Frontend (.env)
- `VITE_API_URL` - Backend API URL

## Building for Production

### Frontend

```bash
cd frontend
npm run build
```

The build files will be in the `frontend/dist` directory.

### Backend

```bash
cd backend
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Author

Sanika Jumde - [@sanikajumde05](https://github.com/sanikajumde05)
