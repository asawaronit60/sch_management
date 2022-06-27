const IdCardController = require('../controllers/idCardController')
const router = require('express').Router()


router.get('/' ,IdCardController.getAllIdCards)
router.post('/' , IdCardController.uploadIdCardImages,IdCardController.createIdCards)
router.delete('/:id' ,IdCardController.deleteIdCards)
router.patch('/:id' ,IdCardController.updateIdCards)



module.exports  = router

