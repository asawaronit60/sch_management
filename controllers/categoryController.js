const Category = require('../models/Category')

exports.getAllCategory = require('../utils/apiFactory').getAll(Category)
exports.createCategory = require('../utils/apiFactory').create(Category)
exports.deleteCategory = require('../utils/apiFactory').delete(Category)
exports.updateCategory = require('../utils/apiFactory').update(Category)