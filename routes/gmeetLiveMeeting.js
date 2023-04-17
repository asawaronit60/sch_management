const gmeetLiveMeetingController = require('../controllers/googleMeetMeetingController')
const router = require('express').Router()

router.get('/',gmeetLiveMeetingController.getAllMeetings)
router.post('/',gmeetLiveMeetingController.createMeeting)
router.delete('/:id',gmeetLiveMeetingController.deleteMeeting)
module.exports = router