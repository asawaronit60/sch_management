const subjectGroupController = require('../controllers/subjectGroupController')
const router = require('express').Router()

router.get('/',subjectGroupController.getSubjectGroups)
router.post('/',subjectGroupController.createSubjectGroup)
router.delete('/:id',subjectGroupController.deleteSubjectGroup)
module.exports = router