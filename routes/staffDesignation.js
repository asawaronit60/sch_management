const designation = require('../controllers/staffDesignationController')

const router = require('express').Router()


router.get('/' , designation.getAllStaffDesignation)
router.post('/' , designation.createStaffDesignation)
router.delete('/:id' , designation.deleteStaffDesignation)
router.patch('/:id' , designation.updateStaffDesignation)



module.exports  = router