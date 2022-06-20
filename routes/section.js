const sectionController = require('../controllers/sectionController')
const router = require('express').Router()


router.get('/getAllSection' , sectionController.getAllSection)
router.post('/createSection' , sectionController.createSection)
router.delete('/deleteSection/:id' , sectionController.deleteSection)
router.patch('/updateSection/:id' , sectionController.updateSection)


module.exports  = router