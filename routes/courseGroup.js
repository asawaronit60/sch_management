const CourseGroupController = require('../controllers/courseGroupController')

const router = require('express').Router()


router.get('/' ,CourseGroupController.getAllCourseGroup)
router.post('/' ,CourseGroupController.createCourseGroup)
router.delete('/:id',CourseGroupController.deleteCourseGroup)
router.patch('/:id',CourseGroupController.updateCourseGroup)

module.exports  = router