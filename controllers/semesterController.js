const Semester = require('../models/Semester')
const ApiFactory = require('../utils/apiFactory')

exports.getAllSemesters = ApiFactory.getAll(Semester)
exports.createSemester = ApiFactory.create(Semester)
exports.deleteSemester = ApiFactory.delete(Semester)
exports.updateSemester = ApiFactory.update(Semester)