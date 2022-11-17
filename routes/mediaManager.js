const router= require('express').Router()
const mediaManagerController = require('../controllers/mediaManagerController')


router.get('/',mediaManagerController.getAllMedia)
router.post('/',mediaManagerController.createMedia)
router.delete('/:id',mediaManagerController.deleteMediaManager)
router.patch('/:id',mediaManagerController.updateMedia)

router.get('/mediaFile',mediaManagerController.getMedia)

module.exports = router

