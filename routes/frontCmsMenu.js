const frontcmsMenuController = require('../controllers/frontCmsMenuController')
const router = require('express').Router()

router.get('/',frontcmsMenuController.getAllMenu)
router.post('/',frontcmsMenuController.createMenu)
router.delete('/:id',frontcmsMenuController.deleteMenu)

module.exports = router