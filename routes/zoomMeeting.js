const zoomMeetingController = require('../controllers/zoomMeetingController')
const authController = require('../controllers/authController')
const router = require('express').Router()


router.get('/' , zoomMeetingController.getAllMettings)
router.post('/' , zoomMeetingController.createMeeting)
router.delete('/:id' , zoomMeetingController.deleteMeeting)
router.patch('/:id' , zoomMeetingController.updateMeeting)


module.exports  = router