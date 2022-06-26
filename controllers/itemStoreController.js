const ItemStore = require('../models/ItemStore')
const api = require('../utils/apiFactory')

exports.getAllItemStore = api.getAll(ItemStore)
exports.createItemStore = api.create(ItemStore)
exports.deleteItemStore = api.delete(ItemStore)
exports.updateItemStore = api.update(ItemStore)