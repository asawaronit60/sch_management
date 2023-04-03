const studentAttendenceController =require('../controllers/studentAttendenceController')
const express = require('express')
const router = express.Router()

router.get('/getAllStudentAttencence',studentAttendenceController.getAllStudentAttence)
router.post('/createStudentAttendence',studentAttendenceController.createStudentAttendence)
router.patch('/updateStudentAttendence/:id',studentAttendenceController.updateStudentAttendence)
router.delete('/deleteStudentAttendence/:id',studentAttendenceController.deleteStudentAttendence)

router.post('/leave',studentAttendenceController.addLeave)
router.get('/leaveList',studentAttendenceController.getAllLeave)
router.get('/file',studentAttendenceController.getFile)

module.exports = router