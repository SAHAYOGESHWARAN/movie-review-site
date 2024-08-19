const Movie = require('../models/Movie');



exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find().populate('reviews');
        res.json(movies);
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.createMovie = async (req, res) => {
    const { title, director, releaseYear, genre } = req.body;

    try {
        const newMovie = new Movie({ title, director, releaseYear, genre });
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
