const router= require('express').Router()
const mediaManagerController = require('../controllers/mediaManagerController')


router.get('/',mediaManagerController.getAllMedia)
router.post('/',mediaManagerController.createMedia)
router.delete('/:id',mediaManagerController.deleteMediaManager)
router.patch('/:id',mediaManagerController.updateMedia)

router.get('/mediaFile',mediaManagerController.getMedia)

router.get('/search/:name',mediaManagerController.search)
router.get('/typeSearch/:type',mediaManagerController.searchFileType)

module.exports = router

