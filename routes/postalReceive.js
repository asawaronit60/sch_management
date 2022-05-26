const PostalReceiveController = require('../controllers/postalReceiveController')
const express = require('express')
const router = express.Router()

router.get('/getAllPostalReceives',PostalReceiveController.getAllPostalReceive)
router.post('/createPostalReceive',PostalReceiveController.createPostalReceive)
router.patch('/updatePostalReceive/:id',PostalReceiveController.updatePostalReceive)
router.delete('/deletePostalReceive/:id',PostalReceiveController.deletePostalReceive)

module.exports = router