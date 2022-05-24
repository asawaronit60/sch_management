const PostalDipatchController = require('../controllers/postalDispatchController')
const express = require('express')
const router = express.Router()

router.get('/getAllPostalDispatch',PostalDipatchController.getAllPostalDispatch)
router.post('/createPostalDispatch',PostalDipatchController.createPostalDispatch)
router.patch('/updatePostalDispatch/:id',PostalDipatchController.updatePostalDispatch)
router.delete('/deletePostalDispatch/:id',PostalDipatchController.deletePostalDispatch)

module.exports = router