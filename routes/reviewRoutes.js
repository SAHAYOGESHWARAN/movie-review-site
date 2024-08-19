const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// POST /api/reviews
router.post('/reviews', async (req, res) => {
    try {
        const newReview = new Review(req.body);
        await newReview.save();
        res.status(201).json({ message: 'Review created successfully', data: newReview });
    } catch (err) {
        console.error('Error creating review:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
