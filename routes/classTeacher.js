const classTeacherController = require('../controllers/classTeacherController')

const router = require('express').Router()

router.get('/',classTeacherController.getClassTeacher)
router.post('/',classTeacherController.createClassTeacher)


/**
 * @body class_id Number
 * @body section_id Number
 * @body teachers_id [Number] array of numbers
 */
router.delete('/',classTeacherController.deleteClassTeacher)

module.exports = router