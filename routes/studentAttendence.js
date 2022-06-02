const studentAttendenceController =require('../controllers/studentAttendenceController')
const express = require('express')
const router = express.Router()

router.get('/getAllStudentAttencence',studentAttendenceController.getAllStudentAttence)
router.post('/createStudentAttendence',studentAttendenceController.createStudentAttendence)
router.patch('/updateStudentAttendence/:id',studentAttendenceController.updateStudentAttendence)
router.delete('/deleteStudentAttendence/:id',studentAttendenceController.deleteStudentAttendence)

module.exports = router