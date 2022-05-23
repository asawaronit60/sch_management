const complaintController = require('../controllers/compaintController')
const express = require('express')
const router = express.Router()

router.get('/getAllComplaint',complaintController.getAllComplaint)
router.post('/createComplaint',complaintController.createComplaint)
router.patch('/updateComplaint/:id',complaintController.updateComplaint)
router.delete('/deleteComplaint/:id',complaintController.deleteComplaint)

module.exports = router