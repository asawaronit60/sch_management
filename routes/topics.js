const TopicController = require('../controllers/TopicController')
const router = require('express').Router()


router.get('/' , TopicController.getAllTopics)
router.post('/' , TopicController.createTopic)
router.delete('/:id' , TopicController.deleteTopic)
router.patch('/:id' , TopicController.updateTopic)

router.get('/topicStatus/:class_id/:section_id/:subject_group_id/:subject_id',TopicController.getSubjectStatus)

/**
 * @body status
 * @body topic_completion_date 
 */
router.patch('/topicStatus/:id',TopicController.updateTopicStatus)
module.exports  = router