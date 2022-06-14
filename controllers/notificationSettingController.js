const NotificationSetting = require('../models/NotificationSettings')
const ApiFactory = require('../utils/apiFactory')

exports.getAllSettings = ApiFactory.getAll(NotificationSetting)
exports.createSettings = ApiFactory.create(NotificationSetting)
exports.deleteSettings = ApiFactory.delete(NotificationSetting)
exports.updateSettings = ApiFactory.update(NotificationSetting)