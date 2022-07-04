const FeeType = require('../models/FeeType')
const api = require('../utils/apiFactory')

exports.getAllFeeType = api.getAll(FeeType)
exports.createFeeType = api.create(FeeType)
exports.deleteFeeType = api.delete(FeeType)
exports.updateFeeType = api.update(FeeType)