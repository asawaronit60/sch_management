const ExamDivision = require('../models/ExamDivision')

exports.getAllDivision = async(req,res,next)=>{
  try {

    let data = await ExamDivision.findAll()

    res.status(200).json({
      status:'success',
      data
    })


  } catch (err) {
    next(err)
  }
}

exports.createDivision = async(req,res,next)=>{
  try {

     await ExamDivision.create(req.body)

    res.status(200).json({
      status:'success',
      mesasge:'Division created successfully!'
    })


  } catch (err) {
    next(err)
  }
}


exports.deleteDivision = async(req,res,next)=>{
  try {

     await ExamDivision.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      mesasge:'Division deleted successfully!'
    })

  } catch (err) {
    next(err)
  }
}


exports.updateDivision = async(req,res,next)=>{
  try {

    await ExamDivision.update(req.body,{where:{id:req.params.id}})


    res.status(200).json({
      status:'success',
      mesasge:'Division updated successfully!'
    })

  } catch (err) {
    next(err)
  }
}