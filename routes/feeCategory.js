const FeeCategoryController = require('../controllers/feeCategoryController')
const router = require('express').Router()


router.get('/' ,FeeCategoryController.getAllFeeCategory)
router.post('/' ,FeeCategoryController.createFeeCategory)
router.delete('/:id' ,FeeCategoryController.deleteFeeCategory)
router.patch('/:id' ,FeeCategoryController.updateFeeCategory)




module.exports  = router