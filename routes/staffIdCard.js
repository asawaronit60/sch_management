const staffIdCardController = require('../controllers/staffIdCardController')

const router = require('express').Router()

router.get('/',staffIdCardController.getAllIdCards)
router.post('/',staffIdCardController.createIdCards)
router.delete('/:id',staffIdCardController.deleteIdCards)
router.patch('/:id',staffIdCardController.updateIdCards)

router.get('/:id',staffIdCardController.getIdCard)

router.get('/search/:role_id',staffIdCardController.searchGenerateIdCard)

module.exports = router