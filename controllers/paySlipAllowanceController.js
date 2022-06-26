const PaySlipAllowance = require('../models/PaySlipAllowance')
const api = require('../utils/apiFactory')

exports.getAllPaySlipAllowance = api.getAll(PaySlipAllowance)
exports.createPaySlipAllowance = api.create(PaySlipAllowance)
exports.deletePaySlipAllowance = api.delete(PaySlipAllowance)
exports.updatePaySlipAllowance = api.update(PaySlipAllowance)