const addAssingmentController = require('../controllers/addAssignmentController')
const router = require('express').Router()


router.get('/upComingHomework' , addAssingmentController.getUpcomingHomework)
router.get('/closedHomework' , addAssingmentController.getClosedHomework)

router.post('/' , addAssingmentController.createAssignment)

router.delete('/:id' , addAssingmentController.deleteAssignment)

/**
 * @body id - Array[Number] array of all the ids of the assignment 
 */
router.delete('/deleteMultiple',addAssingmentController.deleteMultiple)

router.patch('/:id' , addAssingmentController.updateAssignment)



module.exports  = router