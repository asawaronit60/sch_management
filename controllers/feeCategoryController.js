const FeeCategory = require('../models/FeeCategory')
const api = require('../utils/apiFactory')

exports.getAllFeeCategory = api.getAll(FeeCategory)
exports.createFeeCategory = api.create(FeeCategory)
exports.deleteFeeCategory = api.delete(FeeCategory)
exports.updateFeeCategory = api.update(FeeCategory)