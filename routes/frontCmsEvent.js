const frontCmsEventController = require('../controllers/frontCmsEventController')

const router = require('express').Router()

router.get('/',frontCmsEventController.getAllEvent)
router.post('/',frontCmsEventController.createEvent)
router.delete('/:id',frontCmsEventController.deleteEvent)
router.patch('/:id',frontCmsEventController.updateEvent)

module.exports = router