const AlumniEventController = require('../controllers/alumniEventController')
const router = require('express').Router()


router.get('/' , AlumniEventController.getAllAlumniEvent)
router.post('/' , AlumniEventController.createAlumniEvent)
router.delete('/:id' , AlumniEventController.deleteAlumniEvent)
router.patch('/:id' , AlumniEventController.updateAlumniEvent)




module.exports  = router