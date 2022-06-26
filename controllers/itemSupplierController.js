const ItemSupplier = require('../models/ItemSupplier')
const api = require('../utils/apiFactory')

exports.getAllItemSupplier = api.getAll(ItemSupplier)
exports.createItemSupplier = api.create(ItemSupplier)
exports.deleteItemSupplier = api.delete(ItemSupplier)
exports.updateItemSupplier = api.update(ItemSupplier)