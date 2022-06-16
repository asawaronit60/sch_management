const UserRoleController = require('../controllers/userRoleController')

const router = require('express').Router()


router.get('/getAllUserRoles' , UserRoleController.getAllUserRoles)
router.post('/createUserRole' , UserRoleController.createUserRole)
router.delete('/deleteUserRole/:id' , UserRoleController.deleteUserRole)
router.patch('/updateUserRole/:id' , UserRoleController.updateUserRole)


module.exports  = router