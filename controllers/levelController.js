const Level = require('../models/Level')
const api = require('../utils/apiFactory')

exports.getAllLevel = api.getAll(Level)
exports.createLevel = api.create(Level)
exports.deleteLevel = api.delete(Level)
exports.updateLevel = api.update(Level)