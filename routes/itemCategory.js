const ItemCategoryController = require('../controllers/itemCategoryController')

const router = require('express').Router()


router.get('/' ,ItemCategoryController.getAllItemCategory)
router.post('/' ,ItemCategoryController.createItemCategory)
router.delete('/:id' ,ItemCategoryController.deleteItemCategory)
router.patch('/:id' ,ItemCategoryController.updateItemCategory)




module.exports  = router