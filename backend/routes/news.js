const express = require('express');
const router = express.Router();
const News = require('../models/News');

// GET all news
router.get('/news', async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;