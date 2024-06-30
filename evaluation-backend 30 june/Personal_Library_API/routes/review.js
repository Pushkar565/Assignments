// routes/review.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Review = require('../models/Review');
const Book = require('../models/Book');

router.post('/:bookId', auth, async (req, res) => {
    const { review, rating } = req.body;
    try {
        const book = await Book.findById(req.params.bookId);
        if (!book) return res.status(404).json({ msg: 'Book not found' });

        const newReview = new Review({
            book: req.params.bookId,
            user: req.user.id,
            review,
            rating
        });

        const savedReview = await newReview.save();
        res.json(savedReview);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/:bookId', async (req, res) => {
    try {
        const reviews = await Review.find({ book: req.params.bookId }).populate('user', ['name']);
        res.json(reviews);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.put('/:id', auth, async (req, res) => {
    const { review, rating } = req.body;
    try {
        let userReview = await Review.findById(req.params.id);
        if (!userReview) return res.status(404).json({ msg: 'Review not found' });

        if (userReview.user.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

        userReview.review = review;
        userReview.rating = rating;

        await userReview.save();
        res.json(userReview);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const userReview = await Review.findById(req.params.id);
        if (!userReview) return res.status(404).json({ msg: 'Review not found' });

        if (userReview.user.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

        await userReview.remove();
        res.json({ msg: 'Review removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
