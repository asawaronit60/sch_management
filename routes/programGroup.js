const ProgramGroupController = require('../controllers/programGroupController')

const router = require('express').Router()

router.get('/' , ProgramGroupController.getAllProgramGroup)
router.post('/' , ProgramGroupController.createProgramGroup)
router.delete('/:id' , ProgramGroupController.deleteProgramGroup)
router.patch('/:id' , ProgramGroupController.updateProgramGroup)

router.get('/programs/:id',ProgramGroupController.getAllPrograms)


module.exports  = router

