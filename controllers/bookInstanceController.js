const BookInstance = require('../models/bookinstance.js');

//Display bookinstance list
exports.bookinstance_list = (req, res, next) => {
    BookInstance.find()
    .populate('book')
    .exec(function (err, list_bookinstances) {
      if (err) { return next(err); }
      // Successful, so render
      res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
    });
}

// Display detail page for a specific bookinstance.
exports.bookinstance_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: bookinstance detail: ' + req.params.id);
};

// Display bookinstance create form on GET.
exports.bookinstance_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: bookinstance create GET');
};

// Handle bookinstance create on POST.
exports.bookinstance_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: bookinstance create POST');
};

// Display bookinstance delete form on GET.
exports.bookinstance_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: bookinstance delete GET');
};

// Handle bookinstance delete on POST.
exports.bookinstance_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: bookinstance delete POST');
};

// Display bookinstance update form on GET.
exports.bookinstance_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: bookinstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: bookinstance update POST');
};