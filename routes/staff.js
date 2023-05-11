const StaffController = require('../controllers/staffController')
const router = require('express').Router()


router.get('/' , StaffController.getAllStaff)
router.post('/' , StaffController.createStaff)
router.delete('/:id' , StaffController.deleteStaff)
router.patch('/:id' , StaffController.updateStaff)

router.get('/teachers',StaffController.getAllTeachers)

router.get('/:role_id',StaffController.getRoleStaff)

module.exports  = router