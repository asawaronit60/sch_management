const IssueItemController = require('../controllers/issueItemController')

const router = require('express').Router()


router.get('/' , IssueItemController.getAllIssueItems)
router.post('/' , IssueItemController.createIssueItem)
router.delete('/:id' , IssueItemController.deleteIssueItem)
router.patch('/:id' , IssueItemController.updateIssueItem)



module.exports  = router