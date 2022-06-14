const GeneralSettingController = require('../controllers/generalSettingsController')
const router = require('express').Router()


router.get('/getAllSettings' , GeneralSettingController.getAllGeneralSetting)
router.post('/createSettings' , GeneralSettingController.createGeneralSetting)
router.delete('/deleteSettings/:id' , GeneralSettingController.deleteGeneralSetting)
router.patch('/updateSettings/:id' , GeneralSettingController.updateGeneralSetting)



module.exports  = router