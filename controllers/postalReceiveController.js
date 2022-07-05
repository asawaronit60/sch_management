const PostalReceive = require('../models/PostalReceive')
const api = require('../utils/apiFactory')



exports.getAllPostalReceive  = api.getAll(PostalReceive)
exports.createPostalReceive  = api.create(PostalReceive)
exports.deletePostalReceive  = api.delete(PostalReceive)
exports.updatePostalReceive  = api.update(PostalReceive)


