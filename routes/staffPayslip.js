const StaffPaySlipController = require('../controllers/staffPaySlipController')

const router = require('express').Router()


router.get('/' , StaffPaySlipController.getAllStaffPaySlip)
router.post('/' , StaffPaySlipController.createStaffPaySlip)
router.delete('/:id' , StaffPaySlipController.deleteStaffPaySlip)
router.patch('/:id' , StaffPaySlipController.updateStaffPaySlip)

module.exports  = router