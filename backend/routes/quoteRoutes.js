const express = require('express');
const router = express.Router();
const { getTodayQuote, addQuote } = require('../controllers/quoteController');
const { protect } = require('../middleware/authMiddleware');

router.get('/today', getTodayQuote);
router.post('/', protect, addQuote); // simple protected create

module.exports = router;