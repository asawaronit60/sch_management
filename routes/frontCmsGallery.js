const frontCmsGalleryController = require('../controllers/frontCmsGalleryController')

const router = require('express').Router()

router.get('/',frontCmsGalleryController.getAllCmsGallery)
router.post('/',frontCmsGalleryController.createCmsGallery)
router.delete('/:id',frontCmsGalleryController.deleteCmsGallery)
router.patch('/:id',frontCmsGalleryController.updateCmsGallery)

module.exports = router