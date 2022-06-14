const SmsSettingController = require('../controllers/smsSettingController')
const router = require('express').Router()

router.get('/getAllSetting' , SmsSettingController.getAllSetting)
router.post('/createlSetting' , SmsSettingController.createlSetting)
router.delete('/deleteSetting/:id' , SmsSettingController.deleteSetting)
router.patch('/updateSetting/:id' , SmsSettingController.updateSetting)




module.exports  = router