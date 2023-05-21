const emailSettingController = require('../controllers/emailSettingcontroller')

const router = require('express').Router()

router.get('/smtp',emailSettingController.getSmtpSetting)
router.patch('/smtp',emailSettingController.updateSmtpSetting)

router.get('/awsses',emailSettingController.getAwsSesSetting)
router.patch('/awsses',emailSettingController.updateAwsSesSetting)

module.exports = router