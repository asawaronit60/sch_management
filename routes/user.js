const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')

router.post('/signup',authController.signup)
router.post('/logout',authController.logout)
router.post('/login',authController.login)
router.post('/adminLogin',authController.adminLogin)
router.get('/getAllUsers',userController.getAllUsers)
router.get('/countUsers',userController.countUser)
router.post('/createUser',userController.createUser)
router.get('/getUser/:id',userController.getUser)
router.delete('/deleteUser/:id',userController.deleteUser)
router.patch('/updateUser/:id',userController.updateUser)



module.exports = router