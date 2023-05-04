const AlumniEventController = require('../controllers/alumniEventController')
const router = require('express').Router()


router.get('/' , AlumniEventController.getAllAlumniEvent)
router.post('/' , AlumniEventController.createAlumniEvent)
router.delete('/:id' , AlumniEventController.deleteAlumniEvent)
router.patch('/:id' , AlumniEventController.updateAlumniEvent)

// router.get('/getAlumniStudents',AlumniEventController.getAllAlumni)

router.get('/alumni',AlumniEventController.getAllAlumni)

/**
 * @param id - student_id
 */
router.post('/alumni/:id',AlumniEventController.updateAlumni)

/**
 * id - alumni id
 */
router.delete('/alumni/:id',AlumniEventController.deleteAlumni)

module.exports  = router