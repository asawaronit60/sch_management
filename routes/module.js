const moduleController = require('../controllers/moduleController')

const router = require('express').Router()


router.get('/getAllSubjects' ,moduleController.getAllModule)
router.post('/createSubject' ,moduleController.createModule)
router.delete('/deleteSubject/:id' ,moduleController.deleteModule)
router.patch('/updateSubject/:id' ,moduleController.updateModule)


module.exports  = router