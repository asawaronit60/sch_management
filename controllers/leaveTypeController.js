const LeaveType = require('../models/StaffLeaveType')
const api = require('../utils/apiFactory')

exports.getAllLeaveType = api.getAll(LeaveType)
exports.createLeaveType = api.create(LeaveType)
exports.deleteLeaveType = api.delete(LeaveType)
exports.updateLeaveType = api.update(LeaveType)