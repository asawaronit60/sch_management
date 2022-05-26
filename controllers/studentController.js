const Student = require('../models/student')

exports.getAllStudent = async(req,res)=>{
  try {

    


  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}