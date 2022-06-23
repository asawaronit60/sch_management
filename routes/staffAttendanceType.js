const staffAttendanceTypeController = require('../controllers/staffAttendanceTypeController')

const router = require('express').Router()

router.get('/' ,staffAttendanceTypeController.getAllAttendanceType)
router.post('/' ,staffAttendanceTypeController.createAttendanceType)
router.delete('/:id' ,staffAttendanceTypeController.deleteAttendanceType)
router.patch('/:id' ,staffAttendanceTypeController.updateAttendanceType)



module.exports  = router
