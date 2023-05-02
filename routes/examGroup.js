
const examGroupController = require('../controllers/examGroupController')

const router = require('express').Router()

router.get('/',examGroupController.getAllExamGroups)


router.post('/',examGroupController.createExamGroup)

router.post('/exam',examGroupController.createExamGroup)

router.delete('/:id',examGroupController.deleteExamGroup)

router.patch('/:id',examGroupController.updateExamGroup)

/**
 * @body exams_id array of all exams id
 * @body exam_group_id
 */
router.post('/examGroupExam',examGroupController.createExamGroupExams)

/**
 * @param integer exam_group_id
 * @returns list of all the exams which has exam_group_id
 */
router.get('/exams/:id',examGroupController.getAllExams)

/**
 * @body array[] student_ids 
 * @body integer examGroupExamId
 */
router.post('/examStudents',examGroupController.assignExamGroupExamStudents)

/**
 * @body class_id
 * @body section_id
 */
router.get('/examStudents',examGroupController.getExamGroupExamStudents)

/**
 * @body array[] {subjects} - array of all the subjects data
 */
router.get('/examSubjects',examGroupController.assignExamGroupExamSubjects)


/**
 * @body integer exam_group_exam_id
 */
router.get('/examSubjects/:id',examGroupController.getAssignedSubjects)


router.delete('/examSubjects/:id',examGroupController.unAssignExamSubjects)


router.post('/addMarks/:id',examGroupController.uploadMarks)

module.exports = router