const moduleSettingController = require('../controllers/moduleSettingContorller')
const router = require('express').Router()

router.get('/',moduleSettingController.getSetting)
router.patch('/',moduleSettingController.updateSetting)

module.exports = router