const Income = require('../models/Income')

exports.getAllIncome = async(req,res)=>{
  try {
    let data = await Income.findAll()
    res.status(200).json({
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

exports.createIncome = async(req,res)=>{
  try {
      await Income.create(req.body)
      res.status(200).json({
        status:'success',
        message:'Income created successfully!'
      })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.updateIncome = async(req,res)=>{
  try {
    await Income.update(req.body,{where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'Income updated successfully!'
    })
  } catch (err) {
    res.status(400).json({
      status:success,
      message:err.message
    })
  }
}

exports.deleteIncome = async(req,res)=>{
  try {
    await Income.destroy({where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'Income deleted successfully!'
    })
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}