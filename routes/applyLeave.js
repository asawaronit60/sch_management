const applyLeaveController =require('../controllers/applyLeaveController')

const router = require('express').Router()

router.get('/',applyLeaveController.getAllLeaves)
router.post('/',applyLeaveController.applyLeave)
router.delete('/:id',applyLeaveController.deleteLeave)
router.get('/download/:id',applyLeaveController.downloadFile)

module.exports = router