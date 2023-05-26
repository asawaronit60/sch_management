const captchaSettingController = require('../controllers/captchaSettingController')
const router = require('express').Router()

router.get('/',captchaSettingController.getSettings)
router.patch('/',captchaSettingController.updateSettings)

module.exports = router