const AttendenceType = require('../models/AttendenceType')

exports.getAllAttendencyType = async(req,res)=>{
  try {
    
    let data = await AttendenceType.findAll()
    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
      res.status(400).json({
        status:'fail',
        message:err.message
      })
  }
}

exports.createAttendenceType = async(req,res)=>{
  try {
    
    await AttendenceType.create(req.body)
    res.status(200).json({
      status:'success',
      message:'Attendence Type created successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}


exports.deleteAttendenceType = async(req,res)=>{
  try {
    await AttendenceType.destroy({where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'Attendence Type deleted successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}


exports.updateAttendenceType = async(req,res)=>{
  try {
    await AttendenceType.update(req.body,{where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'Attendence Type updated successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}