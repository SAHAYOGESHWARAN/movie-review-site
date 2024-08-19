const Review = require('../models/Review');
const Movie = require('./models/Movie');

exports.createReview = async (req, res) => {
    const { movie, reviewerName, reviewText, rating } = req.body;

    try {
        const newReview = new Review({ movie, reviewerName, reviewText, rating });
        await newReview.save();

        // Add the review to the movie's reviews array
        const reviewedMovie = await Movie.findById(movie);
        reviewedMovie.reviews.push(newReview._id);
        await reviewedMovie.save();

        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getReviews = async (req, res) => {
    const { movieId } = req.params;

    try {
        const reviews = await Review.find({ movie: movieId });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
