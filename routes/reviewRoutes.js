const express = require('express');
const router = express.Router();
const { createReview, getReviews } = require('../controllers/reviewController');

router.post('/', createReview);
router.get('/:movieId', getReviews);

module.exports = router;
