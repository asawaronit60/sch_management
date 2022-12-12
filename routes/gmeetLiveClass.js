const gMeetLiveClassController = require('../controllers/gmeetLiveClassController')

const router = require('express').Router()

router.get('/',gMeetLiveClassController.getGmeetLiveClasses)
router.post('/',gMeetLiveClassController.createLiveClass)
router.delete('/:id',gMeetLiveClassController.deleteLiveClass)

module.exports = router