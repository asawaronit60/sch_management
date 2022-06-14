const Session = require('../models/Session')
const ApiFactory = require('../utils/apiFactory')

exports.getAllSession = ApiFactory.getAll(Session)
exports.createSession = ApiFactory.create(Session)
exports.deleteSession = ApiFactory.delete(Session)
exports.updateSession = ApiFactory.update(Session)

