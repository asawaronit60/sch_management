const studentAttendenceController =require('../controllers/studentAttendenceController')
const express = require('express')
const router = express.Router()

router.get('/getAllStudentAttencence',studentAttendenceController.getAllStudentAttendence)
router.post('/createStudentAttendence',studentAttendenceController.createStudentAttendence)
router.patch('/updateStudentAttendence/:id',studentAttendenceController.updateStudentAttendence)
router.delete('/deleteStudentAttendence/:id',studentAttendenceController.deleteStudentAttendence)

router.get('/studentList',studentAttendenceController.getAllStudentAttendence)

router.post('/leave',studentAttendenceController.addLeave)
router.get('/leaveList',studentAttendenceController.getAllLeave)
router.get('/file',studentAttendenceController.getFile)

router.delete('/deleteLeave/:id',studentAttendenceController.deleteLeave)
router.patch('/updateLeave/:id',studentAttendenceController.updateLeave)

module.exports = router