const StaffPayrollController = require('../controllers/staffPayrollController')
const router = require('express').Router()


router.get('/' , StaffPayrollController.getAllPayroll)
router.post('/' , StaffPayrollController.createPayroll)
router.delete('/:id' , StaffPayrollController.deletePayroll)
router.patch('/:id' , StaffPayrollController.updatePayroll)



module.exports  = router