const frontCmsPageController = require('../controllers/frontCmsPagesController')

const router = require('express').Router()

router.get('/',frontCmsPageController.getAllPages)
router.post('/',frontCmsPageController.createPage)
router.delete('/:id',frontCmsPageController.deletePage)
router.patch('/:id',frontCmsPageController.updatePage)

module.exports = router