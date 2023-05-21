const languageSettingController = require('../controllers/languageSettingController')

const router = require('express').Router()

router.get('/',languageSettingController.getAllSettings)
router.get('/active',languageSettingController.getActiveLanguge)
router.post('/',languageSettingController.createLanguage)
router.patch('/:id',languageSettingController.updateLanguage)

module.exports = router