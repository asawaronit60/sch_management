const IdCardController = require('../controllers/idCardController')
const router = require('express').Router()


router.get('/' ,IdCardController.getAllIdCards)

router.post('/' , IdCardController.createIdCards)

router.delete('/:id' ,IdCardController.deleteIdCards)

router.patch('/:id' ,IdCardController.updateIdCards)

router.get('/generateIdCard/:class_id/:section_id',IdCardController.searchGenerateIdCard)

router.get('/:id',IdCardController.getIdCard)

module.exports  = router

