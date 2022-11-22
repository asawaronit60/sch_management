const Subject = require('../models/Subject')
const ApiFactory = require('../utils/apiFactory')

exports.getAllSubject = ApiFactory.getAll(Subject)
exports.createSubject = ApiFactory.create(Subject)
exports.deleteSubject = ApiFactory.delete(Subject)
exports.updateSubject = ApiFactory.update(Subject)