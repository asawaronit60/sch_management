const categoryController = require('../controllers/categoryController')

const router = require('express').Router()


router.get('/getAllCategory' ,categoryController.getAllCategory)
router.post('/createCategory' ,categoryController.createCategory)
router.delete('/deleteCategory/:id' ,categoryController.deleteCategory)
router.patch('/updateCategory/:id' ,categoryController.updateCategory)



module.exports  = router