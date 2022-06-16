const classController = require('../controllers/classController')
const router = require('express').Router()


router.get('/getAllClasses' , classController.getAllClass)
router.post('/createClass' , classController.createClass)
router.delete('/deleteClass/:id' , classController.deleteClass)
router.patch('/updateClass/:id' , classController.updateClass)


module.exports  = router