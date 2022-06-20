const CourseGroupConteroller = require('../controllers/courseGroupController')

const router = require('express').Router()


router.get('/' ,CourseGroupConteroller.getAllCourseGroup)



module.exports  = router