const VideoTutorialController = require('../controllers/videoTutrialController')

const router = require('express').Router()

router.get('/',VideoTutorialController.getAllContent)
router.post('/',VideoTutorialController.createTutorial)
router.delete('/:id',VideoTutorialController.deleteTutorial)
router.patch('/:id',VideoTutorialController.updateContent)

module.exports = router