const classTeacherController = require('../controllers/classTeacherController')

const router = require('express').Router()

router.get('/',classTeacherController.getClassTeacher)
router.post('/',classTeacherController.createClassTeacher)

module.exports = router