const StudentCategoryController = require('../controllers/studentCategoryController')
const express = require('express')
const router = express.Router()

router.get('/getAllCategory',StudentCategoryController.getAllCategory)
router.post('/createCategory',StudentCategoryController.createCategory)
router.patch('/updateCategory/:id',StudentCategoryController.updateCategory)
router.delete('/deleteCategory/:id',StudentCategoryController.deleteCategory)

module.exports = router