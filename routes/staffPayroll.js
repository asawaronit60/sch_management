const StaffPayrollController = require('../controllers/staffPayrollController')
const router = require('express').Router()


router.get('/' , StaffPayrollController.getStaffLists)
router.post('/generatePayroll' , StaffPayrollController.createPayroll)
router.delete('/:id' , StaffPayrollController.deletePayroll)
// router.patch('/:id' , StaffPayrollController.updatePayroll)

router.get('/basicSalary/:id',StaffPayrollController.getBasicSalary)

router.post('/payment/:id',StaffPayrollController.payment)

router.delete('/revertGeneratedPayroll/:id',StaffPayrollController.deletePayroll)

module.exports  = router