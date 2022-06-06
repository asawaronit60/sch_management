const Class = require('../models/Class')
const ApiFactory = require('../utils/apiFactory')

exports.getAllClass = ApiFactory.getAll(Class)
exports.createClass = ApiFactory.create(Class)
exports.deleteClass = ApiFactory.delete(Class)
exports.updateClass = ApiFactory.update(Class)