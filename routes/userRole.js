const UserRoleController = require('../controllers/userRoleController')

const router = require('express').Router()


router.get('/getAllUserRoles' , UserRoleController.getAllUserRoles)
router.get('/createUserRole' , UserRoleController.createUserRole)
router.get('/deleteUserRole/:id' , UserRoleController.deleteUserRole)
router.get('/updateUserRole/:id' , UserRoleController.updateUserRole)


module.exports  = router