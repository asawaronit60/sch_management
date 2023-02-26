
const Exam = require('../models/Exams')

exports.getAllExams = async(req,res,next)=>{
  try {
 
    let data = await Exam.findAll()

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}
exports.createExam = async(req,res,next)=>{
  try {
 
    let data = await Exam.create(req.body)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}
exports.deleteExam = async(req,res,next)=>{
  try {
 
     await Exam.destroy({where:{
      id:Number(req.params.id)
    }
  })

    res.status(200).json({
      status:'success',
      message:'data deleted'
    })

  } catch (err) {
    next(err)
  }
}
exports.updateExam = async(req,res,next)=>{
  try {
 
     await Exam.update(req.body,{where:{
      id:Number(req.params.id)
    }
  })

    res.status(200).json({
      status:'success',
      mesasge:'data updated!'
    })

  } catch (err) {
    next(err)
  }
}