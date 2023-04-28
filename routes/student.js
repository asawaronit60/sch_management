const studentController = require('../controllers/studentController')
const express = require('express')
const router = express.Router()

router.get('/getAllStudent',studentController.getAllStudent)
router.post('/createStudent',studentController.createStudent)
router.patch('/updateStudent/:id',studentController.updateStudent)
router.delete('/deleteStudeent/:id',studentController.deleteStudent)
router.delete('/deleteBulkStudents',studentController.bulkDelete)
router.get('/disabledStudent',studentController.disabledStudents)

router.get('/classSection/:class_id/:section_id',studentController.getClassSectionStudents)

module.exports = router