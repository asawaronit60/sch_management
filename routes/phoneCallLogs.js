const PhoneCallLogsController = require('../controllers/phoneCallLogsController')
const express = require('express')
const router  = express.Router()

/**
 * @api {get} /getAllPhoneCallLogs
 * @apiName Get All Phone Call Logs list
 * @apiGroup Phone Call Logs
 * 
 * @apiDescription Get List of all the phone call logs
 * @apiQuery {String} fields Attributes you want to get from table seperated by comma
 * @apiError AuthenticationRequiredError You are not logged in! Please login to get access
 * 
 * 
 * @apiSuccessExample {json} Success-response
 * HTTP/1.1 ok
 *  "data": [
 *       {
 *           "id": 1,
 *           "name": "another name",
 *           "description": "this is description anotehr",
 *           "phone": "4023264246",
 *           "Date": "2000-09-09",
 *           "next_follow_date": "2000-09-09",
 *           "call_duration": 12,
 *           "note": "this is a note another",
 *           "call_type": "Incoming",
 *           "createdAt": "2022-05-24T15:25:57.000Z",
 *           "updatedAt": "2022-05-24T15:27:09.000Z"
 *       }
 *    ]
 */


router.get('/getAllPhoneCallLogs',PhoneCallLogsController.getAllPhoneCallLogs)
router.post('/createPhoneCallLogs',PhoneCallLogsController.createPhoneCallLogs)

router.patch('/updatePhoneCallLogs/:id',PhoneCallLogsController.updatePhoneCallLogs)
router.delete('/deletePhoneCallLogs/:id',PhoneCallLogsController.deletePhoneCallLogs)

module.exports = router