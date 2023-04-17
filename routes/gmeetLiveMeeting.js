const gmeetLiveMeetingController = require('../controllers/googleMeetMeetingController')
const router = require('express').Router()

router.get('/',gmeetLiveMeetingController.getAllMeetings)
router.post('/',gmeetLiveMeetingController.createMeeting)
router.delete('/:id',gmeetLiveMeetingController.deleteMeeting)
router.patch('/:id',gmeetLiveMeetingController.updateStatus)
module.exports = router