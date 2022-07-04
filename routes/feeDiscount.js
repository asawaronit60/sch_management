const FeeDiscountController = require('../controllers/feeDiscountController')
const router = require('express').Router()


router.get('/' , FeeDiscountController.getAllFeeDiscount)
router.post('/' , FeeDiscountController.createFeeDiscount)
router.delete('/:id' , FeeDiscountController.deleteFeeDiscount)
router.patch('/:id' , FeeDiscountController.updateFeeDiscount)



module.exports  = router