const admissionEnquiryController = require('../controllers/addmissionEnquiryController')
const express = require('express')
const router  =express.Router()

/**
 * @api {get} /admissionEnquiry/getAllEnquiry
 * @apiName get all admissions enquiries
 * @apiGroup admission enquiry
 * 
 * @apiDescription This is for getting list of all the enquiry
 * 
 * @apiSuccess {Integer} id
 * @apisuccess {String} source - source of the enquiry
 * @apisuccess {String} name - Name of user
 * @apisuccess {String} email - Email of user
 * @apisuccess {String} phone - Phone of user
 * @apisuccess {String} address - Address of user
 * @apisuccess {String} enquiry date - date of enquiry
 * @apisuccess {Date} last follow up date 
 * @apisuccess {Date} next follow up date 
 * @apiSuccess {String} description - detailed description
 * @apiSuccess {String} status - status of enquiry ACTIVE/INACTIVE
 * @apiSuccess {String} note - Note on enquiry
 * @apiSuccess {String} assigned - Assigned person
 * @apiSuccess {String} referenced - referenced
 * @apiSuccess {Integer} no_of_child - No of admiussion count of children
 * @apisuccess {Date} createdAt
 * @apisuccess {Date} updatedAt
 * 
 * @apiError Data not found Not found
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  [
 *       {
 *          "id": 1,
 *          "source": "Front office",
 *           "name": "Ronit",
 *           "email": "asawaronit@gmail.com",
 *           "phone": "7023262146",
 *           "address": "banglore",
 *           "enquiry_date": "1980-06-17",
 *           "last_followUp_date": null,
 *           "next_followUp_date": null,
 *           "status": "active",
 *           "note": "this is a note",
 *           "description": "this is description",
 *           "assigned": "Bradon heart",
 *           "referenced": "Parent",
 *           "no_of_child": 2,
 *           "createdAt": "2022-05-23T06:12:40.000Z",
 *           "updatedAt": "2022-05-23T06:12:40.000Z"
 *       } 
 *     ]
 * 
 */

router.get('/getAllEnquiry',admissionEnquiryController.getAllAdmissionEnquiry)
router.post('/createEnquiry',admissionEnquiryController.createEnquiry)
router.patch('/updateEnquiry:/id',admissionEnquiryController.updateEnquiry)
router.patch('/deleteEnquiry:/id',admissionEnquiryController.deleteEnquiry)

module.exports  = router