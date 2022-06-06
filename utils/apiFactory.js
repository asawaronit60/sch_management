exports.getAll = (Model) => async(req,res)=>{
  try {

    let data = await Model.findAll()
    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      stauts:'fail',
      message:err.message
    })
  }
}

exports.create = (Model) =>async(req,res)=>{
  try {
    await Model.create(req.body)
    res.status(200).json({
      status:'success',
      message:'Created successfully!'
    })
  } catch (err) {
    res.status(400).json({
      stauts:'fail',
      message:err.message
    })
  }
}

exports.delete = (Model) =>async(req,res)=>{
  try {
    await Model.destroy({where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'Deleted successfully!'
    })
  } catch (err) {
    res.status(400).json({
      stauts:'fail',
      message:err.message
    })
  }
}

exports.update = (Model) =>async(req,res)=>{
  try {
    await Model.update(req.body,{where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'Updated successfully!'
    })
  } catch (err) {
    res.status(400).json({
      stauts:'fail',
      message:err.message
    })
  }
}