const Department = require('../models/Department')
const ApiFactory  = require('../utils/apiFactory')

exports.getAllDepartment = ApiFactory.getAll(Department)
exports.createDepartment = ApiFactory.create(Department)
exports.deleteDepartment = ApiFactory.delete(Department)
exports.updateDepartment = ApiFactory.update(Department)

