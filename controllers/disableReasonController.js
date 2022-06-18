const DisableReason = require('../models/DisableReason')

exports.getAllReasons = async(req,res)=>{
  try {

    let data = await  DisableReason.findAll()
    
    res.status(400).json({
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


exports.createReason = async(req,res)=>{

  try {

    await DisableReason.create(req.body)

    res.status(400).json({
      status:'success',
      message:'Reason created successfully!'
    })
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}


exports.deleteReason = async(req,res)=>{
  try {
    
    await DisableReason.destroy({where:{id:req.params.id}})
    res.status(400).json({
      status:'success',
      message:'Reason deleted successfully!'
    })
    

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.updateReason = async(req,res)=>{
  try {
    
    await DisableReason.update(req.body,{where:{id:req.params.id}})
    res.status(400).json({
      status:'success',
      message:'Reason Updated successfully!'
    })
    
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}