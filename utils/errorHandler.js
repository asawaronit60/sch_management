const AppError = require("../utils/AppError")

let errorListObj = {
  'notNull Violation':'',
  'Validation error':''
}

// const handleCastErrorDB = (err)=>{
//      const message = `Invalid ${err.path} : ${err.value}`
//       return new AppError(message,400)
//  }

// const handleDuplicateFieldsDb = (err)=>{
//      const value = err.errmsg.match(/(["'])(\\?.)*?\1/) 
//     const message =  `Duplicate field value : ${value[0]}. Please enter another value.`
//     return new AppError(message,400)
//  } 

const handleUniqueConstraingError = (err)=>{
    return new AppError( ` this ${err.errors[0].path} already exists. Please enter a new ${err.errors[0].path}` ,409)
}

const handleValidationErrorDB = (err) => {
  let errors = []

  err.errors.forEach(errItm => {

    if (errItm.type === 'notNull Violation')
      errors.push(errItm.path + " is required!")

    if (errItm.type === 'Validation error'){
      errors.push("Please enter valid " + errItm.path)
}


  })


  return new AppError(errors, 400)
}

const handleDuplicateFieldDB = (err) => {
  //  const errors  = Object.values(err.errors).map(el => el.message);
  //  const message = `Invalid input data. ${errors.join('. ')}`
  return new AppError('Some values already exists please enter a new value!', 400);
}

const handleJWTError = () => new AppError('Invalid token error.Please login again', 401);

const handleJWTExpiredError = () => new AppError('Your token has expired Please login again', 401)

const handleForeignKeyError = (err)=>{
    return new AppError(`invalid ${err.fields[0]} Please enter correct value!`,500)
}

const sendErrorDev = (err, req, res) => {
  // console.log(req)

  if (req.originalUrl.startsWith('/api')) {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    })
  } else {
    res.status(err.statusCode).render('error', {
      title: 'Something went wrong!',
      msg: err.message
    })
  }

}//main

const sendErrorProd = (err, req, res) => {
  // A) API
  if (req.originalUrl.startsWith('/api')) {

    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    }

    console.error('ERROR', err);

    return res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!'
    });
  }

};//main





module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'Error'

  if (process.env.NODE_ENV === 'development')
    sendErrorDev(err, req, res);


  else if (process.env.NODE_ENV === 'production') {
   
    let error = err
    error.message = err.message
    //  if(error.name==='CastError') error = handleCastErrorDB(error);

    //  if(error.code===11000) error = handleDuplicateFieldsDb(error);
    if(error.name==='SequelizeUniqueConstraintError') handleUniqueConstraingError(err)

    if(error.name==='SequelizeForeignKeyConstraintError') error = handleForeignKeyError(err)

    if (error.name === 'SequelizeValidationError') error = handleValidationErrorDB(error)

    if (error.name === 'SequelizeUniqueConstraintError') error = handleDuplicateFieldDB(error);

    if (error.name === 'JsonWebTokenError') error = handleJWTError()

    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError()

    sendErrorProd(error, req, res)
  }


}//main method