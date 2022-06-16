const Reference = require('../models/Reference')
const Api = require('../utils/apiFactory')

exports.getAllReference = Api.getAll(Reference)
exports.createReference = Api.create(Reference)
exports.deleteReference = Api.delete(Reference)
exports.updateReference = Api.update(Reference)