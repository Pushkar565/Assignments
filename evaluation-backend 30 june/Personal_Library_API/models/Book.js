// models/Book.js
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    status: { type: String, enum: ['Currently Reading', 'Read', 'Want to Read'], default: 'Want to Read' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
