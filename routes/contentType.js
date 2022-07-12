const contentTypeController = require('../controllers/contentTypeController')

const router = require('express').Router()


router.get('/' ,contentTypeController.getallContentType)
router.post('/' ,contentTypeController.createContentType)
router.delete('/:id' ,contentTypeController.deleteContentType)
router.patch('/:id' ,contentTypeController.updateContentType)



module.exports  = router