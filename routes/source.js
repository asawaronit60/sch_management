const SourceController = require('../controllers/sourceController')

const router = require('express').Router()

router.get('/getAllSource' ,SourceController.getAllSource)
router.post('/createSource' ,SourceController.createSource)
router.delete('/deleteSource/:id' ,SourceController.deleteSource)
router.patch('/updateSource/:id' ,SourceController.updateSource)



module.exports  = router