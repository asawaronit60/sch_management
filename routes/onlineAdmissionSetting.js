const onlineAdmissionSettingController = require('../controllers/onlineAdmissionSettingController')
const router = require('express').Router()

router.get('/form',onlineAdmissionSettingController.getOnlineAdmissionFormSetting)
router.patch('/form',onlineAdmissionSettingController.updateOnlineAdmissionFormSetting)
router.get('/file',onlineAdmissionSettingController.getFile)


router.get('/formFields',onlineAdmissionSettingController.getOnlineAdmissionFormFields)
router.patch('/formFields',onlineAdmissionSettingController.updateOnlineAdmissionFormFields)


module.exports = router