const Postaldispatch = require('../models/PostalDipatch')

exports.getAllPostalDispatch  = async(req,res)=>{
  try {

    let data = Postaldispatch.findAll()

    if(req.query.fields){
      data = Postaldispatch.findAll({attributes:req.query.fields.split(',')})
    }

    let postaldispatch = await data

    res.status(200).json({
      status:'success',
      data:postaldispatch
    })

  } catch (err) {
    res.status(400).json({
      status:'success',
      message:err.messsage
    })
  }
}

exports.createPostalDispatch  = async(req,res)=>{
  try {
    
    await Postaldispatch.create(req.body)
    res.status(200).json({
      status:'success',
      message:'Phone call logs created successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'success',
      message:err.messsage
    })
  }
}

exports.updatePostalDispatch = async(req,res)=>{
  try {
    
    await Postaldispatch.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'postal dispatch updated successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'success',
      message:err.messsage
    })
  }
}

exports.deletePostalDispatch = async(req,res)=>{
  try {
    
    await Postaldispatch.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Call log deleted successfully!'
    })
  } catch (err) {
    res.status(400).json({
      status:'success',
      message:err.messsage
    })
  }
}