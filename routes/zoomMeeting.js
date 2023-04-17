const zoomMeetingController = require('../controllers/zoomMeetingController')
const authController = require('../controllers/authController')
const router = require('express').Router()


router.get('/' , zoomMeetingController.getAllMettings)

/**
 * @body staff_id [] id of all the staffs in an array!
 */
router.post('/' , zoomMeetingController.createMeeting)
router.delete('/:id' , zoomMeetingController.deleteMeeting)
router.patch('/:id' , zoomMeetingController.updateStatus)


module.exports  = router