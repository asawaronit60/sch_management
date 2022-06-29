const zoomSetting = require('../models/ZoomSetting')
const api = require('../utils/apiFactory')

exports.getAllSetting = api.getAll(zoomSetting)
exports.createSetting = api.create(zoomSetting)
exports.deleteSetting = api.delete(zoomSetting)
exports.updateSetting = api.update(zoomSetting)