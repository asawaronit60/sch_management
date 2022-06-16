const Purpose = require('../models/Purpose')
const Api = require('../utils/apiFactory')

exports.getAllPurpose = Api.getAll(Purpose)
exports.createPurpose = Api.create(Purpose)
exports.deletePurpose = Api.delete(Purpose)
exports.updatePurpose = Api.update(Purpose)