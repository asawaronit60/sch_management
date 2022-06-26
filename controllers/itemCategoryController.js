const ItemCategory = require('../models/ItemCategory')
const api = require('../utils/apiFactory')

exports.getAllItemCategory = api.getAll(ItemCategory)
exports.createItemCategory = api.create(ItemCategory)
exports.deleteItemCategory = api.delete(ItemCategory)
exports.updateItemCategory = api.update(ItemCategory)