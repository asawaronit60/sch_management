const DisableReason = require('../models/DisableReason')
const ApiFactory = require('../utils/apiFactory')

exports.getAllReasons = ApiFactory.getAll(DisableReason)


exports.createReason = ApiFactory.create(DisableReason)


exports.deleteReason = ApiFactory.delete(DisableReason)

exports.updateReason = ApiFactory.update(DisableReason)