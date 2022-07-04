const FeeReminderController = require('../controllers/feeReminderController')
const router = require('express').Router()


router.get('/' , FeeReminderController.getAllFeeReminder)
router.post('/' , FeeReminderController.createFeeReminder)
router.delete('/:id' , FeeReminderController.deleteFeeReminder)
router.patch('/:id' , FeeReminderController.updateFeeReminder)



module.exports  = router