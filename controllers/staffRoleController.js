const StaffRole = require('../models/StaffRole')
const api = require('../utils/apiFactory')

exports.getAllStaffRole = api.getAll(StaffRole)
exports.createStaffRole = api.create(StaffRole)
exports.deleteStaffRole = api.delete(StaffRole)
exports.updateStaffRole = api.update(StaffRole)