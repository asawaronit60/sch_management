const StaffAttendanceController = require('../controllers/staffAttendanceController')

const router = require('express').Router()


router.get('/' , StaffAttendanceController.getAllStaffAttendanceList)
router.post('/' , StaffAttendanceController.createStaffAttendance)
router.delete('/:id' , StaffAttendanceController.deleteStaffAttendance)
router.patch('/:id' , StaffAttendanceController.updateStaffAttendance)




module.exports  = router