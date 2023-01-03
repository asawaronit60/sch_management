const lessonController = require('../controllers/lessonController')
const router = require('express').Router()


router.get('/' , lessonController.getAllLessons)
router.post('/' , lessonController.createLesson)
router.delete('/:id' , lessonController.delelteLesson)
router.patch('/:id' , lessonController.updateLesson)

router.get('/subjectLessons/:class_id/:section_id/:subject_group_id/:subject_id',lessonController.getClassLessons)

module.exports  = router