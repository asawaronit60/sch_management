
const examDivisionController = require('../controllers/examDivisionController')

const router = require('express').Router()

router.get('/',examDivisionController.getAllDivision)
router.post('/',examDivisionController.createDivision)
router.delete('/:id',examDivisionController.deleteDivision)
router.patch('/:id',examDivisionController.updateDivision)

module.exports = router;