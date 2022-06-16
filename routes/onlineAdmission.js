const onlineAdmissionController = require('../controllers/onlineAdmissionController')
const router = require('express').Router()


router.get('/getAllOnlineStudents' , onlineAdmissionController.getAllOnlineStudents)
router.delete('/deleteOnlineStudents/:id' , onlineAdmissionController.deleteOnlineStudent)
router.patch('/updateOnlineStudents/:id' , onlineAdmissionController.updateOnlineStudent)
router.post('/createOnlineStudent',onlineAdmissionController.createOnlineStudent)


module.exports  = router