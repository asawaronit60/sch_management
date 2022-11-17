const frontCmsNewsController = require('../controllers/frontCmsNewsController')
const router = require('express').Router()

router.get('/',frontCmsNewsController.getAllNews)
router.post('/',frontCmsNewsController.createCmsNews)
router.delete('/:id',frontCmsNewsController.deleteCmsNews)
router.patch('/:id',frontCmsNewsController.updateCmsNews)

module.exports = router