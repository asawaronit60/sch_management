const SubjectController = require('../controllers/subjectController')

const router = require('express').Router()


router.get('/getAllSubjects' ,SubjectController.getAllSubjects)
router.post('/createSubject' ,SubjectController.createSubject)
router.delete('/deleteSubject/:id' ,SubjectController.deleteSubject)
router.patch('/updateSubject/:id' ,SubjectController.updateSubject)


module.exports  = router