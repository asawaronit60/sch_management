const applyLeaveController =require('../controllers/applyLeaveController')

const router = require('express').Router()

router.get('/',applyLeaveController.getAllLeaves)
router.get('/getMyLeaves',applyLeaveController.getMyLeaves)
router.post('/',applyLeaveController.applyLeave)
router.delete('/:id',applyLeaveController.deleteLeave)
router.patch('/:id',applyLeaveController.updateLeave)
router.get('/download/:id',applyLeaveController.downloadFile)

router.get('/leaves/:staff_id',applyLeaveController.getStaffLeaves)

module.exports = router