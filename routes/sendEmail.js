const sendEmailController = require('../controllers/sendEmailController')
const router = require('express').Router()

router.get('/todayBirthday',sendEmailController.getBirthdayUsers)


/**
 * @body title
 * @body message
 * @body email_template_id
 */
router.post('/sendBirthdayEmail',sendEmailController.sendEmailTodayBirthDay)


/**
 * @body type student or parent 
 * @body id[] array of selected student id
 */
router.post('/sendCredentials',sendEmailController.sendLoginCredential)

module.exports = router
