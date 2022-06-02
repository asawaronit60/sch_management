const expenseHeadController = require('../controllers/expenseHeadController')
const router = require('express').Router()


router.get('/getAllExpenseHead' , expenseHeadController.getAllExpenseHead)
router.post('/createExpenseHead' ,expenseHeadController.createExpenseHead)
router.delete('/deleteExpenseHead/:id',expenseHeadController.deleteExpenseHead)
router.patch('/updateExpenseHead/:id',expenseHeadController.updateExpenseHead)

module.exports  = router