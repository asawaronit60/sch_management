const leaveTypeController = require('../controllers/leaveTypeController')

const router = require('express').Router()


router.get('/' ,leaveTypeController.getAllLeaveType)
router.post('/' ,leaveTypeController.createLeaveType)
router.delete('/:id' ,leaveTypeController.deleteLeaveType)
router.patch('/:id' ,leaveTypeController.updateLeaveType)




module.exports  = router