const classController = require('../controllers/classController')
const router = require('express').Router()


router.get('/getAllClasses' , classController.getAllClass)
router.get('/createClass' , classController.createClass)
router.get('/deleteClass/:id' , classController.deleteClass)
router.get('/updateClass/:id' , classController.updateClass)


module.exports  = router