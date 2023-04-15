const subjectGroupController = require('../controllers/subjectGroupController')
const router = require('express').Router()

router.get('/',subjectGroupController.getSubjectGroups)
router.post('/',subjectGroupController.createSubjectGroup)
router.delete('/:id',subjectGroupController.deleteSubjectGroup)

/**
 * @body sections[] array of sections id 
 * @body subjects[] array of subject id 
 * @body remaining fields ex class_id , name
 */
router.patch('/:id',subjectGroupController.updateSubjectGroup)

router.get('/subjects/:subject_group_id',subjectGroupController.getSubjectGroupSubjects)
router.get('/subjectGroup/:class_id/:section_id',subjectGroupController.getSubjectGroup)
module.exports = router