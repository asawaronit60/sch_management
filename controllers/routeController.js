const Route = require('../models/Routes')
const api = require('../utils/apiFactory')

exports.getAllRoutes = api.getAll(Route)
exports.createRoutes = api.create(Route)
exports.deleteRoutes = api.delete(Route)
exports.updateRoutes = api.update(Route)