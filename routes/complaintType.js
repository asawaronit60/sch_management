const ComplaintTypeController = require('../controllers/complaintTypeController')

const router = require('express').Router()

router.get('/getAllComplaintType' ,ComplaintTypeController.getAllComplaintType)
router.post('/createComplaintType' ,ComplaintTypeController.createComplaintType)
router.delete('/deleteComplaintType/:id' ,ComplaintTypeController.deleteComplaintType)
router.patch('/updateComplaintType/:id' ,ComplaintTypeController.updateComplaintType)



module.exports  = router