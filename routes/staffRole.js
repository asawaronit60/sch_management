const StaffRoleController = require('../controllers/staffRoleController')


const router = require('express').Router()


router.get('/' , StaffRoleController.getAllStaffRole)
router.get('/' , StaffRoleController.createStaffRole)
router.get('/:id' , StaffRoleController.deleteStaffRole)
router.get('/:id' , StaffRoleController.updateStaffRole)



module.exports  = router