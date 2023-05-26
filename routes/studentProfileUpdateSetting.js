const studentProfileUpdateSettingController = require('../controllers/studentProfileUpdateSettingController')

const router = require('express').Router()

router.get('/',studentProfileUpdateSettingController.getStudentProfileSetting)
router.patch('/',studentProfileUpdateSettingController.updateStudentProfileSetting)

module.exports = router