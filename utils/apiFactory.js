exports.getAll = (Model) => async(req,res,next)=>{
  try {

    let data = await Model.findAll()
    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.create = (Model) =>async(req,res,next)=>{
  try {
    await Model.create(req.body)
    
    res.status(200).json({
      status:'success',
      message:'Created successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.delete = (Model) =>async(req,res,next)=>{
  try {
    await Model.destroy({where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'Deleted successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.update = (Model) =>async(req,res,next)=>{
  try {
    await Model.update(req.body,{where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'Updated successfully!'
    })
  } catch (err) {
   next(err)
  }
}