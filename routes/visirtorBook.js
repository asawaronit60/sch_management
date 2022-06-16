const visitorBookController = require('../controllers/visitorBookController')
const express = require('express')
const router  =express.Router()

router.get('/getAllvisitorBook',visitorBookController.getAllVisitorsBook)
router.post('/createVisitorBook',visitorBookController.createVisitorBook)
router.patch('/updateVisitorBook/:id',visitorBookController.updateVisitorBook)
router.delete('/deleteVisitorBook/:id',visitorBookController.deleteVisitorBook)

module.exports  = router