const subjectController = require('../controllers/subjectController')

const router = require('express').Router()


router.get('/getAllSubjects' ,subjectController.getAllSubject)
router.post('/createSubject' ,subjectController.createSubject)
router.delete('/deleteSubject/:id' ,subjectController.deleteSubject)
router.patch('/updateSubject/:id' ,subjectController.updateSubject)


module.exports  = router