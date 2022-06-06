const Income = require('../models/Income')
const ApiFactory = require('../utils/apiFactory')



exports.getAllIncome = ApiFactory.getAll(Income)

exports.createIncome = ApiFactory.create(Income)

exports.updateIncome = ApiFactory.update(Income)

exports.deleteIncome = ApiFactory.delete(Income)