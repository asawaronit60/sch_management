const PickupPoint = require('../models/PickupPoints')
const api = require('../utils/apiFactory')

exports.getAllPoints = api.getAll(PickupPoint)
exports.createPoints = api.create(PickupPoint)
exports.deletePoints = api.delete(PickupPoint)
exports.updatePoints = api.update(PickupPoint)