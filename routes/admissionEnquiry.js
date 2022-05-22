const admissionEnquiryController = require('../controllers/addmissionEnquiryController')
const express = require('express')
const router  =express.Router()

router.get('/getAllEnquiry',admissionEnquiryController.getAllAdmissionEnquiry)
router.post('/createEnquiry',admissionEnquiryController.createEnquiry)
router.patch('/updateEnquiry:/id',admissionEnquiryController.updateEnquiry)
router.patch('/deleteEnquiry:/id',admissionEnquiryController.deleteEnquiry)

module.exports  = router