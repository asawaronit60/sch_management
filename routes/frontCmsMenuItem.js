const frontCmsMenuItemController = require('../controllers/frontCmsMenuItemController')

const router = require('express').Router()

router.get('/:menu_id',frontCmsMenuItemController.getAllItem)
router.post('/:menu_id',frontCmsMenuItemController.createMenuItem)
router.delete('/:id',frontCmsMenuItemController.deleteMenuItem)
router.patch('/:id',frontCmsMenuItemController.updateMenuItem)

module.exports = router