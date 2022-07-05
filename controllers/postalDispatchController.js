const Postaldispatch = require('../models/PostalDipatch')
const api = require('../utils/apiFactory')


exports.getAllPostalDispatch = api.getAll(Postaldispatch)
exports.createPostalDispatch = api.create(Postaldispatch)
exports.deletePostalDispatch = api.delete(Postaldispatch)
exports.updatePostalDispatch = api.update(Postaldispatch)