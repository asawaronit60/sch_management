const classTimetableController = require('../controllers/classTimetableController')
const router = require('express').Router()

router.get('/:class_id/:section_id/:subject_group_id',classTimetableController.getTimeTable)
router.post('/',classTimetableController.createTimeTable)
router.delete('/:id',classTimetableController.deleteTimetable)
router.patch('/:id',classTimetableController.updateTimetable)

module.exports = router