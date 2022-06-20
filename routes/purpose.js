const PurposeController = require('../controllers/puposeController')

const router = require('express').Router()

router.get('/getAllPurpose' ,PurposeController.getAllPurpose)
router.post('/createPurpose' ,PurposeController.createPurpose)
router.delete('/deletePurpose/:id' ,PurposeController.deletePurpose)
router.patch('/updatePurpose/:id' ,PurposeController.updatePurpose)



module.exports  = router