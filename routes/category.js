const categoryController = require('../controllers/categoryController')

const router = require('express').Router()


router.get('/getAllCategory' ,categoryController.getAllCategory)
router.get('/createCategory' ,categoryController.createCategory)
router.get('/deleteCategory/:id' ,categoryController.deleteCategory)
router.get('/updateCategory/:id' ,categoryController.updateCategory)



module.exports  = router