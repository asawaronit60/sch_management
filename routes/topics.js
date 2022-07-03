const TopicController = require('../controllers/TopicController')
const router = require('express').Router()


router.get('/' , TopicController.getAllTopics)
router.post('/' , TopicController.createTopic)
router.delete('/:id' , TopicController.deleteTopic)
router.patch('/:id' , TopicController.updateTopic)



module.exports  = router