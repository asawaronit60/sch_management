const frontCmsBannerController = require('../controllers/frontCmsBannerController')
const router = require('express').Router()

router.get('/',frontCmsBannerController.getAllBanner)
router.post('/',frontCmsBannerController.createBanner)
router.delete('/:id',frontCmsBannerController.deleteBanner)

module.exports = router