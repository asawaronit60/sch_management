const currencySettingController = require('../controllers/currencySettingController')

const router = require('express').Router()

router.get('/',currencySettingController.getAllCurrency)
router.patch('/:id',currencySettingController.updateCurrency)
module.exports = router