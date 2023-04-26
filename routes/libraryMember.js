const LibraryMemberController = require('../controllers/libraryMembersController')

const router = require('express').Router()

router.post('/addStudent',LibraryMemberController.addStudentMember)
router.post('/addStaff',LibraryMemberController.addStaffMember)

router.delete('deleteMembership/:id',LibraryMemberController.deleteMembership)

module.exports = router