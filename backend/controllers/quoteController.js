const Quote = require('../models/Quote');

/**
 * GET /api/quotes/today
 * returns a single "daily" quote (random)
 */
exports.getTodayQuote = async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    if (count === 0) {
      return res.status(200).json({ text: 'Stay positive — add quotes to the database!', author: '' });
    }
    const rand = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(rand).lean();
    res.json(quote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * ADMIN: POST /api/quotes
 * Add a new quote. In this simple app anyone authenticated can add.
 */
exports.addQuote = async (req, res) => {
  try {
    const { text, author, tags } = req.body;
    const quote = await Quote.create({ text, author, tags });
    res.status(201).json(quote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};