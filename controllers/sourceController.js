const Source = require('../models/Source')
const Api = require('../utils/apiFactory')

exports.getAllSource = Api.getAll(Source)
exports.createSource = Api.create(Source)
exports.deleteSource = Api.delete(Source)
exports.updateSource = Api.update(Source)