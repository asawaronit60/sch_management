const systemFieldsSettingsController = require('../controllers/systemFieldSettingController')
const router = require('express').Router()

router.get('/student',systemFieldsSettingsController.getStudentFields)

router.patch('/student',systemFieldsSettingsController.updateStudentFields)

router.get('/staff',systemFieldsSettingsController.getStaffFields)

router.patch('/staff',systemFieldsSettingsController.updateStaffFields)

module.exports = router