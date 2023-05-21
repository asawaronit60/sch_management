/* This is a module that exports a router object with various routes for handling SMS settings using
different SMS gateways. Each route has a corresponding controller function that handles the logic
for getting and updating the SMS settings for that particular gateway. The router object is then
used in the main application file to handle incoming requests for SMS settings. */
const SmsSettingController = require('../controllers/smsSettingController')
const router = require('express').Router()

router.get('/ClickTailSmsSetting' , SmsSettingController.getClickTailSmsSetting)
router.patch('/ClickTailSmsSetting' , SmsSettingController.updateClickTailSmsSetting)


router.get('/twilioSmsSetting' , SmsSettingController.gettwilioSmsSetting)
router.patch('/twilioSmsSetting' , SmsSettingController.updatetwilioSmsSetting)

router.get('/msg91SmsSetting' , SmsSettingController.getmsg91SmsSetting)
router.patch('/msg91SmsSetting' , SmsSettingController.updatemsg91SmsSetting)


router.get('/textLocalSmsSetting' , SmsSettingController.gettextLocalSmsSetting)
router.patch('/textLocalSmsSetting' , SmsSettingController.updatetextLocalSmsSetting)

router.get('/smsCountrySmsSetting' , SmsSettingController.getsmsCountrySmsSetting)
router.patch('/smsCountrySmsSetting' , SmsSettingController.updatesmsCountrySmsSetting)



router.get('/bulkSmsSmsSetting' , SmsSettingController.getbulkSmsSmsSetting)
router.patch('/bulkSmsSmsSetting' , SmsSettingController.updatebulkSmsSmsSetting)


router.get('/mobiReachSmsSetting' , SmsSettingController.getmobiReachSmsSetting)
router.patch('/mobiReachSmsSetting' , SmsSettingController.updatemobiReachSmsSetting)

router.get('/nexmoSmsSetting' , SmsSettingController.getnexmoSmsSetting)
router.patch('/nexmoSmsSetting' , SmsSettingController.updatenexmoSmsSetting)

router.get('/africasTalkingSmsSetting' , SmsSettingController.getafricasTalkingSmsSetting)
router.patch('/africasTalkingSmsSetting' , SmsSettingController.updateafricasTalkingSmsSetting)

router.get('/smsEgyptSmsSetting' , SmsSettingController.getsmsEgyptSmsSetting)
router.patch('/smsEgyptSmsSetting' , SmsSettingController.updatesmsEgyptSmsSetting)

router.get('/customSmsGatewaySmsSetting' , SmsSettingController.getcustomSmsGatewaySmsSetting)
router.patch('/customSmsGatewaySmsSetting' , SmsSettingController.updatecustomSmsGatewaySmsSetting)



module.exports  = router