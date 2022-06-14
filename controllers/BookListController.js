const BookList = require('../models/BookList')
const ApiFactory = require('../utils/apiFactory')

exports.getAllBooks = ApiFactory.getAll(BookList)
exports.createBook = ApiFactory.create(BookList)
exports.deleteBook = ApiFactory.delete(BookList)
exports.updateBook = ApiFactory.update(BookList)