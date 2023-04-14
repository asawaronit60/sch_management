const IdCardController = require('../controllers/idCardController')
const router = require('express').Router()


router.get('/' ,IdCardController.getAllIdCards)
router.post('/' , IdCardController.createIdCards)
router.delete('/:id' ,IdCardController.deleteIdCards)
router.patch('/:id' ,IdCardController.updateIdCards)
router.get('/generateIdCard/search',IdCardController.searchGenerateIdCard)


module.exports  = router

