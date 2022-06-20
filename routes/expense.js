const expenseController = require('../controllers/expenseController')
const router = require('express').Router()


router.get('/getAllExpense' ,expenseController.getAllExpense)
router.post('/createExpense' , expenseController.createExpense)
router.delete('/deleteExpense/:id',expenseController.deleteExpense)
router.patch('/updateExpense/:id',expenseController.updateExpense)
module.exports  = router