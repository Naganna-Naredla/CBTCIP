const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Get all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 }).limit(4);
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new review
router.post('/add', async (req, res) => {
    const review = new Review({
        name: req.body.name,
        review: req.body.review,
        rating: req.body.rating
    });

    try {
        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
