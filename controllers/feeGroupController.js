const FeeGroup = require('../models/FeeGroup')
const api = require('../utils/apiFactory')

exports.getAllFeeGroup = api.getAll(FeeGroup)
exports.createFeeGroup = api.create(FeeGroup)
exports.deleteFeeGroup = api.delete(FeeGroup)
exports.updateFeeGroup = api.update(FeeGroup)