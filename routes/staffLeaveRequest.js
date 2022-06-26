const staffLeaveRequestController = require('../controllers/staffLeaveRequestController')

const router = require('express').Router()


router.get('/' ,staffLeaveRequestController.getAllLeaveRequest)
router.post('/' ,staffLeaveRequestController.createLeaveRequest)
router.delete('/:id' ,staffLeaveRequestController.deleteLeaveRequest)
router.patch('/:id' ,staffLeaveRequestController.updateLeaveRequest)




module.exports  = router