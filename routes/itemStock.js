const itemStockController  = require('../controllers/itemStockController')

const router = require('express').Router()


router.get('/' , itemStockController.getAllItemStock)
router.post('/' , itemStockController.createItemStock)
router.delete('/:id' , itemStockController.deleteItemStock)
router.patch('/:id' , itemStockController.updateItemStock)




module.exports  = router