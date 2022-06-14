const NotificationSettingController = require('../controllers/notificationSettingController')
const router = require('express').Router()


router.get('/getAllSetting' , NotificationSettingController.getAllSettings)
router.get('/createSetting' , NotificationSettingController.createSettings)
router.get('/deleteSetting/:id' , NotificationSettingController.deleteSettings)
router.get('/updateSetting/:id' , NotificationSettingController.updateSettings)




module.exports  = router