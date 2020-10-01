const Genre = require('../models/genre.js');
const Book = require('../models/book.js');
const async = require('async');
const mongoose = require('mongoose');
//Display genre list
exports.genre_list = (req, res, next) => {
    Genre.find()
        .populate('genre')
        .sort([['name', 'ascending']])
        .exec(function (err, list_genre) {
            if (err) { return next(err) }
            res.render('genre_list', { title: 'Genre List', genre_list: list_genre });
        });
}

// Display detail page for a specific genre.
exports.genre_detail = (req, res, next) => {
    const id = mongoose.Types.ObjectId(req.params.id);  

    async.parallel(
        {
            genre: function (callback) {
                Genre.findById(id)
                    .exec(callback);
            },
        },

        {
            genre_books: function (callback) {
                Book.find({ 'genre': id })
                    .exec(callback);
            }
        },

        function (err, results) {
            if (err) { return next(err); }
            if (results.genre == null) {
                const err = new Error('Genre not found');
                err.status = 404;
                return next(err);
            }

            res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books });
        }
    )
};

// Display genre create form on GET.
exports.genre_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: genre create GET');
};

// Handle genre create on POST.
exports.genre_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: genre create POST');
};

// Display genre delete form on GET.
exports.genre_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: genre delete GET');
};

// Handle genre delete on POST.
exports.genre_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: genre delete POST');
};

// Display genre update form on GET.
exports.genre_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: genre update GET');
};

// Handle genre update on POST.
exports.genre_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: genre update POST');
};