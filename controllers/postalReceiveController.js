const PostalReceive = require('../models/PostalDipatch')

exports.getAllPostalReceive  = async(req,res)=>{
  try {

    let data = PostalReceive.findAll()

    if(req.query.fields){
      data = PostalReceive.findAll({attributes:req.query.fields.split(',')})
    }

    let postalreceive = await data

    res.status(200).json({
      status:'success',
      data:postalreceive
    })

  } catch (err) {
    res.status(400).json({
      status:'success',
      message:err.messsage
    })
  }
}

exports.createPostalReceive  = async(req,res)=>{
  try {
    
    await PostalReceive.create(req.body)
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

exports.updatePostalReceive = async(req,res=>{
  try {
    
    await PostalReceive.update(req.body,{where:{id:req.params.id}})

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
})

exports.deletePostalReceive = async(req,res)=>{
  try {
    
    await PostalReceive.destroy({where:{id:req.params.id}})

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