const Module = require('../models/Module')
const ApiFactory = require('../utils/apiFactory')

exports.getAllModule = ApiFactory.getAll(Module)
exports.createModule = ApiFactory.create(Module)
exports.deleteModule = ApiFactory.delete(Module)
exports.updateModule = ApiFactory.update(Module)