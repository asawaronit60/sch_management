const onlineExamQuestions = require('../controllers/onlineExamQuestionController')
const onlineExam = require('../controllers/onlineExamController')

const router = require('express').Router()

router.get('/upcomingExams',onlineExam.getUpcomingExams)
router.get('/closedExams',onlineExam.getClosedExams)
router.post('/',onlineExam.createOnlineExam)
router.delete('/:id',onlineExam.deleteOnlineExam)
router.patch('/:id',onlineExam.updateOnlineExam)




router.get('/getQuestions',onlineExamQuestions.getAllExamQuestions)
router.post('/createQuestion',onlineExamQuestions.createExamQuestion)

router.get('/getQuestion/:id',onlineExamQuestions.getExamQuestion)

router.delete('/deleteQuestion/:id',onlineExamQuestions.deleteOnlineExam)

/**
 * @body ids [Number] list of ids of all the questions to be deleted!
 */
router.delete('/bulkDeleteQuestions',onlineExamQuestions.bulkDeleteQuestions)

/**
 * @body questions - Object of one question ex - { id:question_id , marks:2.00, negative_marks:0.25 }
 * @body online_exam_id - online exam id
 */
router.post('/assignQuestions',onlineExam.assignQuestions)

/**
 * @param id Number
 */
router.delete('/unAssignQuestion/:id',onlineExam.unAssignQuestion)


/**
 * @param id -  exam_id id of the selected exam 
 * @params question_type
 * @params question_level
 * @params subject_id
 * @params class_id
 * @params section_id
 * @params keyword
 */
router.get('/listQuestions/:id',onlineExam.getListToAddQuestions)


/**
 * @param subject_id - ?subjects_id return questions of particular subject
 */
router.get('/examQuestions/:id',onlineExam.getExamQuestions)




/**
 * @body student_id
 * @body online_exam_id 
 */
router.post('/assignStudent',onlineExam.assignStudents)

/**
 * @body student_id
 * @body online_exam_id
 */
router.post('/unAssignStudent',onlineExam.unAssignStudent)

/**
 * @param exam_id
 * @param class_id
 * @param section_id
 */
router.get('/assignedStudents/:exam_id/:class_id/:section_id',onlineExam.getAssignedStudents)

module.exports = router