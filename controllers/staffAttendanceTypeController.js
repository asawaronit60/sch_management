const StaffAttendanceType = require('../models/StaffAttendanceType')
const api = require('../utils/apiFactory')

exports.getAllAttendanceType = api.getAll(StaffAttendanceType)
exports.createAttendanceType = api.create(StaffAttendanceType)
exports.deleteAttendanceType = api.delete(StaffAttendanceType)
exports.updateAttendanceType = api.update(StaffAttendanceType)