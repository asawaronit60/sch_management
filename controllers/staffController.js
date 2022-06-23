const Staff = require('../models/Staff')
const api = require('../utils/apiFactory')

exports.getAllStaff = api.getAll(Staff)
exports.createStaff = api.create(Staff)
exports.deleteStaff = api.delete(Staff)
exports.updateStaff = api.update(Staff)