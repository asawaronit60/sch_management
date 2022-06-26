const PayslipAllowanceController = require('../controllers/paySlipAllowanceController')

const router = require('express').Router()


router.get('/' ,PayslipAllowanceController.getAllPaySlipAllowance)
router.post('/' ,PayslipAllowanceController.createPaySlipAllowance)
router.delete('/:id' ,PayslipAllowanceController.deletePaySlipAllowance)
router.patch('/:id' ,PayslipAllowanceController.updatePaySlipAllowance)


module.exports  = router