const BookList = require('../models/BookList')
const ApiFactory = require('../utils/apiFactory')
// const BookIssue = require('../models/BookIssue')
const AppError = require('../utils/AppError')
const BookIssue = require('../models/IssueBook')


exports.getAllBooks = async (req, res, next) => {
  try {

    let data = await BookList.findAll()
    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }
}


exports.getBook = async (req, res, next) => {
  try {

    let data = await BookList.findByPk(req.params.id)
    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.getAllStudentBooks = async (req, res, next) => {
  try {

    let data = await BookIssue.findAll({
      where: {
        student_id: req.params.student_id,
        is_returned: false
      },
      include: {
        model: BookList
      }
    })

    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.issueBook = async (req, res, next) => {
  try {

    

    if (!req.body.book_id)
      return next(new AppError('Book is required', 404))

    if (!req.body.student_id)
      return next(new AppError('Student is required', 404))

      if (!req.body.due_return_date)
      return next(new AppError('Due date is required', 404))

      let book = await BookList.findByPk(req.body.book_id)

      if(book.getDataValue('qty')!=null && book.getDataValue('qty') <= 0)
      return next(new AppError('Not Available!',404))
      

      await BookIssue.create(req.body)
      

      res.status(200).json({
      status: 'success',
      message: 'Book issued successfully!'
    })

    if(book.getDataValue('qty')!=null)
    await BookList.decrement('qty',{by:1 ,where:{id:req.body.book_id}})

  } catch (err) {
    next(err)
  }
}

exports.returnBook = async (req, res, next) => {
  try {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = yyyy + '/' + mm + '/' + dd;
    
    if(req.body.return_date)
    formattedToday = req.body.return_date

    await BookIssue.update({ is_returned: true, return_date:formattedToday}, { where: { id: req.params.id } })

    let book = await BookIssue.findOne({id:req.params.id})

    await BookList.increment('qty',{by:1,where:{id:book.getDataValue('book_id')}})


    res.status(200).json({
      status:'success',
      message:'book returned !'
    })

  } catch (err) {
    next(err)
  }
}

exports.createBook = ApiFactory.create(BookList)
exports.deleteBook = ApiFactory.delete(BookList)
exports.updateBook = ApiFactory.update(BookList)