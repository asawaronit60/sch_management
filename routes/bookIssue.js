const BookIssueController = require('../controllers/bookIssueController')

const router = require('express').Router()


router.get('/getAllBookIssue' ,BookIssueController.getAllBookIssues)
router.post('/createBookIssue' ,BookIssueController.createIssues)
router.delete('/deleteBookIssue/:id' ,BookIssueController.deleteIssues)
router.patch('/updateBookIssue/:id' ,BookIssueController.updateIssues)


module.exports  = router