const marksGradeController = require('../controllers/marksGradeController')

const router = require('express').Router()

router.get('/',marksGradeController.getAllMarksGrade)
router.post('/',marksGradeController.createMarksGrade)
router.delete('/:id',marksGradeController.deleteMarksGrade)
router.patch('/:id',marksGradeController.updateMarksGrade)

module.exports = router