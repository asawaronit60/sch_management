const StudentHouse = require('../models/StudentHouse')

exports.getAllHouse = async(req,res)=>{
  try {
    
    let data = await StudentHouse.findAll()
    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      stauts:"fail",
      message:err.message
    })
  }
}

exports.createHouse = async(req,res)=>{
  try {
      await StudentHouse.create(req.body)

      res.status(200).json({
        status:'success',
        message:'House created successfully!'
      })
  } catch (err) {
    res.status(400).json({
      stauts:"fail",
      message:err.message
    })
  }
}

exports.deleteHouse = async(req,res)=>{
  try {
    await StudentHouse.destroy({where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'House deleted successfully!'
    })
  } catch (err) {
    res.status(400).json({
      stauts:"fail",
      message:err.message
    })
  }
}

exports.updateHouse = async(req,res)=>{
  try {

    await StudentHouse.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'House updated successfully!'
    })
    
  } catch (err) {
    res.status(400).json({
      stauts:"fail",
      message:err.message
    })
  }
}