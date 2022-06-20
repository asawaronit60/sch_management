const incomeController = require('../controllers/incomeController')
const router = require('express').Router()

router.get('/getAllIncome' , incomeController.getAllIncome)
router.post('/createIncome' , incomeController.createIncome)
router.delete('/deleteIncome/:id',incomeController.deleteIncome)
router.patch('/updateIncome/:id',incomeController.updateIncome)


module.exports  = router