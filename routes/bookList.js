const BookListController = require('../controllers/BookListController')
const router = require('express').Router()


router.get('/getAllBooks' ,BookListController.getAllBooks)
router.post('/createBook' ,BookListController.createBook)
router.delete('/deleteBook/:id' ,BookListController.deleteBook)
router.patch('/updateBook/:id' ,BookListController.updateBook)


module.exports  = router
