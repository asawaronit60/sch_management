const itemController = require('../controllers/itemController')
const router = require('express').Router()


router.get('/' , itemController.getAllItems)
router.post('/' , itemController.createItem)
router.delete('/:id' , itemController.deleteItem)
router.patch('/:id' , itemController.updateItem)



module.exports  = router