const ReferenceController = require('../controllers/referenceController')

const router = require('express').Router()

router.get('/getAllReference' ,ReferenceController.getAllReference)
router.post('/createReference' ,ReferenceController.createReference)
router.delete('/deleteReference/:id' ,ReferenceController.deleteReference)
router.patch('/updateReference/:id' ,ReferenceController.updateReference)



module.exports  = router