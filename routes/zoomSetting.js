const zoomSettingController = require('../controllers/zoomSettingController')

const router = require('express').Router()

router.get('/' ,zoomSettingController.getAllSetting)
router.post('/' ,zoomSettingController.createSetting)
router.delete('/:id' ,zoomSettingController.deleteSetting)
router.patch('/:id' ,zoomSettingController.updateSetting)



module.exports  = router