// Optional helper to seed sample quotes into the DB.
// Run with: node seedQuotes.js (after installing deps and setting .env)
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Quote = require('./models/Quote');

dotenv.config();
connectDB();

const sample = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "You are enough just as you are.", author: "Me" },
  { text: "Progress, not perfection.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Unknown" }
];

const seed = async () => {
  try {
    await Quote.deleteMany();
    await Quote.insertMany(sample);
    console.log('Seeded quotes');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();