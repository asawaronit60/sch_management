const StaffRatingController =require('../controllers/staffRatingController')

const router = require('express').Router()


router.get('/' ,StaffRatingController.getAllStaffRating)
router.get('/' ,StaffRatingController.createStaffRating)
router.get('/:id' ,StaffRatingController.deleteStaffRating)
router.get('/:id' ,StaffRatingController.updateStaffRating)




module.exports  = router