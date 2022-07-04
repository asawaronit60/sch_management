const IncomeHeadController = require('../controllers/incomeheadController')

const router = require('express').Router()


router.get('/getAllIncomeHead' ,IncomeHeadController.getAllIncomeHead)
router.post('/createIncomeHead' ,IncomeHeadController.createIncomeHead)
router.delete('/deleteIncomehead/:id',IncomeHeadController.deleteIncomeHead)
router.patch('/updateIncomeHead/:id',IncomeHeadController.updateIncomeHead)

module.exports  = router