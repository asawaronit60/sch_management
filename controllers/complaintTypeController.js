const compalaintType = require('../models/ComplaintType')
const Api = require('../utils/apiFactory')

exports.getAllComplaintType = Api.getAll(compalaintType)
exports.createComplaintType = Api.create(compalaintType)
exports.deleteComplaintType = Api.delete(compalaintType)
exports.updateComplaintType = Api.update(compalaintType)