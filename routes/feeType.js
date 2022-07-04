const FeeTypeController = require('../controllers/feeTypecontroller')
const router = require('express').Router()


router.get('/' , FeeTypeController.getAllFeeType)
router.post('/' , FeeTypeController.createFeeType)
router.delete('/:id' , FeeTypeController.deleteFeeType)
router.patch('/:id' , FeeTypeController.updateFeeType)



module.exports  = router