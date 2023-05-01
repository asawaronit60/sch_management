const LibraryMemberController = require('../controllers/libraryMembersController')

const router = require('express').Router()

router.post('/addStudent',LibraryMemberController.addStudentMember)
router.post('/addStaff',LibraryMemberController.addStaffMember)

router.get('/classStudent/:class_id/:section_id',LibraryMemberController.getAllClassStudents)

router.get('/staff',LibraryMemberController.getAllStaffs)

router.delete('/deleteMembership/:id',LibraryMemberController.deleteMembership)


router.get('/allStudentMembers',LibraryMemberController.getLibraryStudents)


/**
 * @description will give student library details
 * @param student_id
 */
router.get('/student/:id',LibraryMemberController.getStudent)

module.exports = router