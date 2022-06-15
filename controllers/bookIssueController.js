const BookIssue = require('../models/BookIssue')
const ApiFactory = require('../utils/apiFactory')

exports.getAllBookIssues = ApiFactory.getAll(BookIssue)
exports.createIssues = ApiFactory.create(BookIssue)
exports.deleteIssues = ApiFactory.delete(BookIssue)
exports.updateIssues = ApiFactory.update(BookIssue)