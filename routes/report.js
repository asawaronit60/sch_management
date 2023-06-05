const reportController = require('../controllers/reportController')


const router = require('express').Router()

router.get('/alumni/:class_id/:section_id/:session_id',reportController.getAlumni)

router.get('/studentHostel/:class_id/:section_id/:hostel_id',reportController.getHostelDetails)

module.exports = router