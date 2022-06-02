 const ExpenseHead = require('../models/ExpesnseHead')

 exports.getAllExpenseHead = async(req,res)=>{
   try {
      
    let data = await ExpenseHead.findAll()
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

 exports.createExpenseHead = async(req,res)=>{
    try {
      await ExpenseHead.create(req.body)
      res.status(200).json({
        status:'success',
        message:'Expense Head created successfully!'
      })
    } catch (err) {
        res.status(400).json({
          status:'fail',
          message:err.message
        })
    }
 }

 exports.deleteExpenseHead = async(req,res)=>{
   try {
      await ExpenseHead.destroy({where:{id:req.params.id}})
      res.status(200).json({
        status:'success',
        message:'ExpenseHead deleted successfully!'
      })
   } catch (err) {
     res.status(400).json({
       status:'fail',
       message:err.message
     })
    }
 }

 exports.updateExpenseHead = async(req,res)=>{
  try {
     await ExpenseHead.update(req.body,{where:{id:req.params.id}})
     res.status(200).json({
       status:'success',
       message:'ExpenseHead updated successfully!'
     })
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}