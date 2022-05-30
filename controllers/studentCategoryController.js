const StudentCategory = require('../models/StudentCategory')

exports.getAllCategory = async(req,res)=>{
  try {
    
    let data = await StudentCategory.findAll()
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

exports.createCategory = async(req,res)=>{
  try {
      await StudentCategory.create(req.body)

      res.status(200).json({
        status:'success',
        message:'Category created successfully!'
      })
  } catch (err) {
    res.status(400).json({
      stauts:"fail",
      message:err.message
    })
  }
}

exports.deleteCategory = async(req,res)=>{
  try {
    await StudentCategory.destroy({where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'Category deleted successfully!'
    })
  } catch (err) {
    res.status(400).json({
      stauts:"fail",
      message:err.message
    })
  }
}

exports.updateCategory = async(req,res)=>{
  try {

    await StudentCategory.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Category updated successfully!'
    })
  } catch (err) {
    res.status(400).json({
      stauts:"fail",
      message:err.message
    })
  }
}