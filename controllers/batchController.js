const Batch = require('../models/Batch')
const ApiFactory = require('../utils/apiFactory')

exports.getAllBatches = ApiFactory.getAll(Batch)
exports.createBatch = ApiFactory.create(Batch)
exports.deleteBatch = ApiFactory.delete(Batch)
exports.updateBatch = ApiFactory.update(Batch)