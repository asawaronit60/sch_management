const studentController = require('../controllers/studentController')
const express = require('express')
const router = express.Router()

router.get('/getAllStudent',studentController.getAllStudent)
router.post('/createStudent',studentController.createStudent)
router.patch('/updateStudent/:id',studentController.updateStudent)
router.delete('/deleteStudeent/:id',studentController.deleteStudent)
router.delete('/deleteBulkStudents',studentController.bulkDelete)
router.get('/disabledStudent/:class_id/:section_id',studentController.disabledStudents)

router.get('/classSection/:class_id/:section_id',studentController.getClassSectionStudents)


/**
 * @body @requires newClassId
 * @body @requires newSectionId
 * @body @requires newSessionId
 * @body @requires class_id
 * @body @requires section_id
 */
router.post('/promoteStudents',studentController.promoteStudents)



module.exports = router