const SemesterController = require('../controllers/semesterController')

const router = require('express').Router()


router.get('/getAllSemesters' , SemesterController.getAllSemesters)
router.post('/createSemester' , SemesterController.createSemester)
router.delete('/deleteSemester/:id' , SemesterController.deleteSemester)
router.patch('/updateSemester/:id' , SemesterController.updateSemester)



module.exports  = router