const SmsSetting = require('../models/SmsSettings')
const ApiFactory = require('../utils/apiFactory')

exports.getAllSetting = ApiFactory.getAll(SmsSetting)
exports.createlSetting = ApiFactory.create(SmsSetting)
exports.deleteSetting = ApiFactory.delete(SmsSetting)
exports.updateSetting = ApiFactory.update(SmsSetting)
