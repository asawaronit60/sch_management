const sendEmailController = require('../controllers/sendEmailController')
const router = require('express').Router()

router.get('/todayBirthday',sendEmailController.getBirthdayUsers)


/**
 * @body title
 * @body message
 * @body email_template_id
 * @body attachment
 */
router.post('/sendBirthdayEmail',sendEmailController.sendEmailTodayBirthDay)

/**
 * @body title
 * @body class_id  
 * @body section_id  
 * @body message
 * @body email_template_id
 * @body attachment
 */
router.post('/sendEmailClass',sendEmailController.sendEmailClass)


/**
 * @body type array ['student','gaurdian']
 * @body designation_id Array of all designation id 
 * @body title
 * @body message
 * @body email_template_id
 * @body attachment
 */
router.post('/sendEmailGroup',sendEmailController.sendEmailGroup)



/**
 * @body id Array of all user id 
 * @body title
 * @body message
 * @body email_template_id
 * @body attachment
 */
router.post('/sendEmailIndividual',sendEmailController.sendEmailIndividual)




/**
 * @body type student or parent 
 * @body id[] array of selected student id
 */
router.post('/sendCredentials',sendEmailController.sendLoginCredential)


module.exports = router
