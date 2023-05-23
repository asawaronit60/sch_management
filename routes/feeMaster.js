const FeeMasterController = require('../controllers/feeMasterController')
const router = require('express').Router()


router.get('/' , FeeMasterController.getAllFeeMaster)
router.post('/' , FeeMasterController.createFeeMaster)
router.delete('/:id',FeeMasterController.deleteFeeMaster)
router.delete('/feeMasterType/:fee_master_id/:fee_type_id' , FeeMasterController.deleteFeeMasterType)
router.patch('/:id' , FeeMasterController.updateFeeMaster)
router.get('/groupFees',FeeMasterController.getFeeMasterAmountSum)



module.exports  = router