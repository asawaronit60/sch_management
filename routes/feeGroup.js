const FeeGroupController = require('../controllers/feeGroupController')
const router = require('express').Router()


router.get('/' , FeeGroupController.getAllFeeGroup)
router.post('/' , FeeGroupController.createFeeGroup)
router.delete('/:id' , FeeGroupController.deleteFeeGroup)
router.patch('/:id' , FeeGroupController.updateFeeGroup)


module.exports  = router