const classTimetableController = require('../controllers/classTimetableController')
const router = require('express').Router()

router.get('/timeTable/:class_id/:section_id/',classTimetableController.getTimeTable)
router.post('/',classTimetableController.createTimeTable)
router.delete('/:id',classTimetableController.deleteTimetable)
router.patch('/:id',classTimetableController.updateTimetable)

router.get('/teacherTimetable/:staff_id',classTimetableController.getTeacherTimetable)


module.exports = router