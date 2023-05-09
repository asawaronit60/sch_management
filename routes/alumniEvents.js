const AlumniEventController = require('../controllers/alumniEventController')
const router = require('express').Router()


router.get('/' , AlumniEventController.getAllAlumniEvent)
router.post('/' , AlumniEventController.createAlumniEvent)
router.delete('/:id' , AlumniEventController.deleteAlumniEvent)
router.patch('/:id' , AlumniEventController.updateAlumniEvent)

// router.get('/getAlumniStudents',AlumniEventController.getAllAlumni)

/**
 * @body @requires class_id 
 * @body @requires session_id
 * 
 * @body section_id 
 * 
 */
router.get('/alumni',AlumniEventController.getAllAlumni)

/**
 * @param id - student_id
 */
router.post('/alumni/:id',AlumniEventController.updateAlumni)

/**
 * id - alumni id
 */
router.delete('/alumni/:id',AlumniEventController.deleteAlumni)

/**
 * @body admission_no student admission no.
 */

router.get('/admissionNo',AlumniEventController.getByAdmissionNo)

module.exports  = router