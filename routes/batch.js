const BatchController = require('../controllers/batchController')

const router = require('express').Router()

router.get('/getAllBatches' ,BatchController.getAllBatches)
router.get('/createBatch' ,BatchController.createBatch)
router.get('/deleteBatch/:id' ,BatchController.deleteBatch)
router.get('/updateBatch/:id' ,BatchController.updateBatch)


module.exports  = router