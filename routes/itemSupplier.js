const ItemSupplierController = require('../controllers/itemSupplierController')

const router = require('express').Router()


router.get('/' ,ItemSupplierController.getAllItemSupplier)
router.post('/' ,ItemSupplierController.createItemSupplier)
router.delete('/:id' ,ItemSupplierController.deleteItemSupplier)
router.patch('/:id' ,ItemSupplierController.updateItemSupplier)




module.exports  = router