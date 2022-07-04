const FeeDiscount = require('../models/FeeDiscount')
const api = require('../utils/apiFactory')

exports.getAllFeeDiscount = api.getAll(FeeDiscount)
exports.createFeeDiscount = api.create(FeeDiscount)
exports.deleteFeeDiscount = api.delete(FeeDiscount)
exports.updateFeeDiscount = api.update(FeeDiscount)