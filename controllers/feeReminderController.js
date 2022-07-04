const FeeReminder = require('../models/FeeReminder')
const api = require('../utils/apiFactory')

exports.getAllFeeReminder = api.getAll(FeeReminder)
exports.createFeeReminder = api.create(FeeReminder)
exports.deleteFeeReminder = api.delete(FeeReminder)
exports.updateFeeReminder = api.update(FeeReminder)