const TransportFeeMasterController = require('../controllers/transportFeeMasterController')

const router = require('express').Router()

router.get('/',TransportFeeMasterController.getAllFeeMaster)
router.patch('/:id',TransportFeeMasterController.updateData)

module.exports = router
