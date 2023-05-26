const generalSettingController = require('../controllers/generalSettingsController')
const router = require('express').Router()


router.get('/' , generalSettingController.getGeneralSetting)

router.patch('/' , generalSettingController.updateGeneralSetting)

router.get('/feeSetting',generalSettingController.getFeeSetting)
router.patch('/feeSetting',generalSettingController.updateFeeSetting)

router.get('/studentGaurdianPannelSetting',generalSettingController.getStudentGaurdianPannel)
router.patch('/studentGaurdianPannelSetting',generalSettingController.updateStudentGaurdianPannel)

router.get('/attendenceTypeSetting',generalSettingController.getAttendenceTypeSetting)
router.patch('/attendenceTypeSetting',generalSettingController.updateAttendenceTypeSetting)

router.get('/idGenerationSetting',generalSettingController.getIdGenerationSetting)
router.patch('/idGenerationSetting',generalSettingController.updateIdGenerationSetting)


module.exports  = router