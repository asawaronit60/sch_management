
const examConstroller  = require('../controllers/examController')
const router = require('express').Router()

router.get('/',examConstroller.getAllExams)
router.post('/',examConstroller.createExam)
router.delete('/:id',examConstroller.deleteExam)
router.patch('/:id',examConstroller.updateExam)

module.exports = router