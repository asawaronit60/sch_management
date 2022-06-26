const addAssingmentController = require('../controllers/addAssignmentController')
const router = require('express').Router()


router.get('/' , addAssingmentController.getAllAssignment)
router.post('/' , addAssingmentController.createAssignment)
router.delete('/:id' , addAssingmentController.deleteAssignment)
router.patch('/:id' , addAssingmentController.updateAssignment)



module.exports  = router