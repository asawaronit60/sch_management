const BookListController = require('../controllers/BookListController')
const router = require('express').Router()


router.get('/getAllBooks' ,BookListController.getAllBooks)
router.post('/createBook' ,BookListController.createBook)
router.delete('/deleteBook/:id' ,BookListController.deleteBook)
router.patch('/updateBook/:id' ,BookListController.updateBook)

router.get('/:id',BookListController.getBook)




router.get('/studentBook/:student_id',BookListController.getAllStudentBooks)
/**
 * @requires book_id
 * @requires student_id 
 */
router.post('/issueBook',BookListController.issueBook)

router.post('/returnBook/:id',BookListController.returnBook)

module.exports  = router
