const Section = require('../models/Section')
const ApiFactory = require('../utils/apiFactory')

exports.getAllSection = ApiFactory.getAll(Section)
exports.createSection = ApiFactory.create(Section)
exports.deleteSection = ApiFactory.delete(Section)
exports.updateSection = ApiFactory.update(Section)