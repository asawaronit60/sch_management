
const examController  = require('../controllers/examController')
const router = require('express').Router()

router.get('/',examController.getAllExams)
router.post('/',examController.createExam)
router.delete('/:id',examController.deleteExam)
router.patch('/:id',examController.updateExam)

module.exports = router