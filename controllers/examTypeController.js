
const ExamType = require('../models/ExamType')

exports.getAllType = async(req,res,next)=>{
  try {
 
    let data = await ExamType.findAll()

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}
exports.createType = async(req,res,next)=>{
  try {
 
    let data = await ExamType.create(req.body)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}
exports.deleteType = async(req,res,next)=>{
  try {
 
     await ExamType.destroy({where:{
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
exports.updateType = async(req,res,next)=>{
  try {
 
     await ExamType.update(req.body,{where:{
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