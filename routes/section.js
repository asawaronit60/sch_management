const sectionController = require('../controllers/sectionController')
const router = require('express').Router()


router.get('/getAllSection' , sectionController.getAllSection)
router.get('/createSection' , sectionController.createSection)
router.get('/deleteSection/:id' , sectionController.deleteSection)
router.get('/updateSection/:id' , sectionController.updateSection)


module.exports  = router