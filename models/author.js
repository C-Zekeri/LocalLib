const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const AuthorSchema = new Schema(
    {
        first_name: { type: String, required: true, maxlength: 100 },
        family_name: { type: String, required: true, maxlength: 100 },
        date_of_birth: { type: Date },
        date_of_death: { type: Date },
    }
);

//Virtual for author's full name
AuthorSchema
    .virtual('name')
    .get(function () {
        let fullname = '';
        if (this.first_name && this.family_name) {
            fullname = this.family_name + ', ' + this.first_name
        }
        if (!this.first_name || !this.family_name) {
            fullname = '';
        }

        return fullname;
    });

// Virtual for author's lifespan
AuthorSchema
    .virtual('lifespan')
    .get(function () {
        return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
    });

// Virtual for author's URL
AuthorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author/' + this._id;
    });


//Virtual for formatted DOB
AuthorSchema
    .virtual('DOB_formatted')
    .get(function () {
        return this.date_of_birth ? moment(this.date_of_birth).format('MMMM Do, YYYY') : '';
    });


//Virtual for formatted DOD
AuthorSchema
    .virtual('DOD_formatted')
    .get(function () {
        return this.date_of_death ? moment(this.date_of_death).format('MMMM Do, YYYY') : '';
    });


module.exports = mongoose.model('Author', AuthorSchema)