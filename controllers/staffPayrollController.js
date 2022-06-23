const Payroll = require('../models/StaffPayroll')
const api = require('../utils/apiFactory')

exports.getAllPayroll = api.getAll(Payroll)
exports.createPayroll = api.create(Payroll)
exports.deletePayroll = api.delete(Payroll)
exports.updatePayroll = api.update(Payroll)