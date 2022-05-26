const Student = require('../models/student')

exports.getAllStudent = async(req,res)=>{
  try {

    let data  = await Student.findAll()
    res.status(200).json({
      data
    })
    


  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}