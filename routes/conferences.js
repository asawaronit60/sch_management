const ConferencesController = require('../controllers/conferenceController')

const router = require('express').Router()


router.get('/' , ConferencesController.getAllConference)
router.post('/' , ConferencesController.createConference)
router.delete('/:id' , ConferencesController.deleteConference)
router.patch('/:id' , ConferencesController.updateConference)



module.exports  = router