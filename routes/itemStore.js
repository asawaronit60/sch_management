const ItemStoreController = require('../controllers/itemStoreController')

const router = require('express').Router()


router.get('/' ,ItemStoreController.getAllItemStore)
router.post('/' ,ItemStoreController.createItemStore)
router.delete('/:id' ,ItemStoreController.deleteItemStore)
router.patch('/:id' ,ItemStoreController.updateItemStore)




module.exports  = router