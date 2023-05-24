const frontCmsSettingController = require('../controllers/frontCmsSettingController')
const router = require('express').Router()

router.get('/',frontCmsSettingController.getFrontCmsSetting)
router.patch('/',frontCmsSettingController.updateFrontCmsSetting)

module.exports = router