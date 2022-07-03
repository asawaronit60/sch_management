const lessonController = require('../controllers/lessonController')
const router = require('express').Router()


router.get('/' , lessonController.getAllLessons)
router.post('/' , lessonController.createLesson)
router.delete('/:id' , lessonController.delelteLesson)
router.patch('/:id' , lessonController.updateLesson)


module.exports  = router