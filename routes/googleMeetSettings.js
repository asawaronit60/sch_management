const googleMeetSettigs = require('../controllers/googleMeetSettingController')

const router = require('express').Router()

router.get('/',googleMeetSettigs.getSettings)
router.post('/',googleMeetSettigs.createSettings)
router.patch('/:id',googleMeetSettigs.updateSetttings)

module.exports = router