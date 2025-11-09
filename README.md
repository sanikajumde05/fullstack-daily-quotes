# daily-quotes
# ✨ Daily Quotes & Affirmations App

A full-stack web application that allows users to sign up, log in, view daily motivational quotes/affirmations, and add their own quotes. The goal of this project is to provide users with a positive habit-building space where they can store and revisit inspiring thoughts daily.

---

## 🚀 Tech Stack

### **Frontend**
- React (Vite)
- Tailwind CSS
- Axios
- React Router
- Context API (for Authentication State)

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt for password hashing
- CORS & Morgan (middleware)

---

## 📌 Features

✅ User Signup & Login (JWT Authentication)  
✅ Protected Home Page – only accessible after login  
✅ View Daily Random Affirmation / Quote  
✅ Add Your Own Quotes (Public or Private)  
✅ View & Manage Your Submitted Quotes  
✅ Default quotes auto-seeded into the database  

---

## 🧠 Project Overview

This project is built as a part of a Full Stack Web Development learning journey. It demonstrates end-to-end integration of:

- Frontend UI + API calls
- Backend REST APIs
- JWT-based authentication
- Database storage using MongoDB
- State management using React Context

---

## 📁 Folder Structure

daily-quotes/
fullstack-auth-app/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── .env
│   ├── config/
│   │   └── db.js                # Database connection
│   ├── models/
│   │   └── User.js              # User schema/model
│   ├── routes/
│   │   └── authRoutes.js        # Signup/Login routes
│   ├── controllers/
│   │   └── authController.js    # Logic for signup/login
│   ├── middleware/
│   │   └── authMiddleware.js    # Verify JWT token
│   └── utils/
│       └── generateToken.js     # JWT generation helper
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── Signup.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   └── api.js           # Axios instance
│   │   └── context/
│   │       └── AuthContext.jsx  # Manage auth state globally
│   └── public/
│       └── index.html
│
├── README.md                    # Project overview and setup guide
└── .gitignore

yaml

---

## 🛠️ Setup Instructions (For macOS)

### ✅ Prerequisites
Ensure the following are installed:

| Tool | Command to Install |
|-------|------------------------|
| Node.js | `brew install node` |
| MongoDB | `brew install mongodb-community@7.0` |

Start MongoDB:
bash
brew services start mongodb-community@7.0
▶️ Run the Backend
bash
Copy code
cd backend
cp .env.example .env
npm install
npm run dev
Backend runs at:
http://localhost:5000

##💻 Run the Frontend
Open another terminal:

bash
Copy code
cd frontend
cp .env.example .env
npm install
npm run dev
Frontend runs at:
http://localhost:5173

##🧪 API Endpoints
Method	Endpoint	Description
POST	/api/auth/signup	Create a new user
POST	/api/auth/login	Login user & return JWT token
GET	/api/auth/me	Get logged-in user details
GET	/api/quotes/random	Fetch a random public quote
GET	/api/quotes/mine	Get user-added quotes
POST	/api/quotes	Add a new quote
DELETE	/api/quotes/:id	Delete a user’s quote

Authorization Header Format:

makefile
Authorization: Bearer <token>

###📍 Future Enhancements
🔹 Like & Save Quotes
🔹 Categories (Happiness, Success, Self-Love, Productivity)
🔹 “Quote of the Day” Feature for Each User
🔹 Dark Mode UI
🔹 Share Quote on WhatsApp / Instagram

###👩‍💻 Author
Sanika Jumde
B.Tech CSE, 3rd Year
Symbiosis Institute of Technology

