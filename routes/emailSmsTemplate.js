const emailSmsTemplateController = require('../controllers/emailSmsTemplateController')

const router = require('express').Router()

router.get('/email',emailSmsTemplateController.getAllEmail)
router.get('email/:id',emailSmsTemplateController.getEmail)
router.post('/email',emailSmsTemplateController.createEmailTemplate)
router.delete('/email/:id',emailSmsTemplateController.deleteEmailTemplate)
router.patch('/email/:id',emailSmsTemplateController.updateEmailTemplate)


router.get('/sms',emailSmsTemplateController.getAllSms)
router.get('/sms/:id',emailSmsTemplateController.getSms)
router.post('/sms',emailSmsTemplateController.createSmsTemplate)
router.delete('/sms/:id',emailSmsTemplateController.deleteSmsTemplate)
router.patch('/sms/:id',emailSmsTemplateController.updateSmsTemplate)


module.exports = router