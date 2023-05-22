const headerFooterSettingController = require('../controllers/headerFooterSettingController')

const router = require('express').Router()

router.get('/feeRecipt',headerFooterSettingController.getFeeRecipt)
router.patch('/feeRecipt',headerFooterSettingController.updateFeeRecipt)

router.get('/payslip',headerFooterSettingController.getpayslip)
router.patch('/payslip',headerFooterSettingController.updatepayslip)


router.get('/onlineAdmission',headerFooterSettingController.getOnlineAdmission)
router.patch('/onlineAdmission',headerFooterSettingController.updateOnlineAdmission)


router.get('/onlineExam',headerFooterSettingController.getOnlineExam)
router.patch('/onlineExam',headerFooterSettingController.updateOnlineExam)


module.exports= router