const Expense = require('../models/Expense')

exports.getAllExpense = async(req,res)=>{
  try {

    let data = await Expense.findAll()
    res.status(200).json({
      status:"success",
      data
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.createExpense = async(req,res)=>{
  try {
     await Expense.create(req.body)
     
    res.status(200).json({
      status:"success",
      message:'Expense created successully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}


exports.deleteExpense = async(req,res)=>{
  try {

     await Expense.destroy({where:{id:req.params.id}})
    res.status(200).json({
      status:"success",
      message:'Expense deleted successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}


exports.updateExpense = async(req,res)=>{
  try {

     await Expense.update(req.body,{where:{id:req.params.id}})
    res.status(200).json({
      status:"success",
      message:'Expense updated successfully'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}