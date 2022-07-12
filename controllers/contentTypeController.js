const contentType = require('../models/ContentType')
const api = require('../utils/apiFactory')

exports.getallContentType = api.getAll(contentType)
exports.createContentType = api.create(contentType)
exports.deleteContentType = api.delete(contentType)
exports.updateContentType = api.update(contentType)