const disableReasonController = require('../controllers/disableReasonController')
const express = require('express')
const router = express.Router()


router.get('/getAllReasons',disableReasonController.getAllReasons)
router.post('/createReason',disableReasonController.createReason)
router.delete('/deleteReason/:id',disableReasonController.deleteReason)
router.patch('/updateReason/:id',disableReasonController.updateReason)

module.exports = router