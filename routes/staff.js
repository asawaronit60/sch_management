const StaffController = require('../controllers/staffController')
const router = require('express').Router()


router.get('/' , StaffController.getAllStaff)
router.post('/' , StaffController.createStaff)
router.delete('/:id' , StaffController.deleteStaff)
router.patch('/:id' , StaffController.updateStaff)


module.exports  = router