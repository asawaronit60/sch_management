const BookListController = require('../controllers/BookListController')
const router = require('express').Router()


router.get('/getAllBooks' ,BookListController.getAllBooks)
router.post('/createBook' ,BookListController.createBook)
router.delete('/deleteBook/:id' ,BookListController.deleteBook)
router.patch('/updateBook/:id' ,BookListController.updateBook)

router.get('/:id',BookListController.getBook)


/**
 * @description is used to get all the issued book be the student!
 * @param student_id
 */

router.get('/studentBook/:student_id',BookListController.getAllStudentBooks)


/**
 * @description is used to issue book to a student
 * @requires book_id
 * @requires student_id 
 * @requires due_date
 */
router.post('/issueBook',BookListController.issueBook)


/**
 * @description for returning the book 
 * @param member_id 
 */
router.post('/returnBook/:id',BookListController.returnBook)

module.exports  = router
