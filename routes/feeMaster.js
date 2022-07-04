const FeeMasterController = require('../controllers/feeMasterController')
const router = require('express').Router()


router.get('/' , FeeMasterController.getAllFeeMaster)
router.post('/' , FeeMasterController.createFeeMaster)
router.delete('/:id' , FeeMasterController.deleteFeeMaster)
router.patch('/:id' , FeeMasterController.updateFeeMaster)




module.exports  = router