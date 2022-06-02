const StudentAttendence = require('../models/StudentAttendence')

exports.getAllStudentAttence = async(req,res)=>{
  try {
    let data = StudentAttendence.findAll()

    if(req.query.fields){
      data = data.findAll({attributes:req.query.fields.split(',')})
    }

    let studentAttendence = await data

    res.status(200).json({
      status:'success',
      data:studentAttendence
    })
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.createStudentAttendence = async(req,res)=>{
  try {
    await StudentAttendence.create(req.body)
    res.status(200).json({
      status:'success',
      message:'Attendence added successfully!'
    })
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.deleteStudentAttendence = async(req,res)=>{
  try {
    await StudentAttendence.destroy({where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'Studence attendence deleted successfully'
    })
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.updateStudentAttendence = async(req,res)=>{
  try {

    await StudentAttendence.update(req.body,{where:{id:req.parms.id}})
    res.status(200).json({
      status:'success',
      message:'Student Attendence updated successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}