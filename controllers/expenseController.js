const Expense = require('../models/Expense')
const expenseHead = require('../models/ExpesnseHead')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null, `${__dirname}/../public/expenseDocuments` )
  },
  filename:function(req,file,cb){
   cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage}).single('documents')

exports.getAllExpense = async(req,res)=>{
  try {

    let data = await Expense.findAll({
      include:{
        model:expenseHead,
        attributes:['exp_category']
      }
    })
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

    upload(req,res,async(err)=>{

      if(err){
        return res.status(400).json({
          status:'fail',
          message:'Error uploading the file!'
        })
      }

      if(req.file){

        let pathArr = req.file.path.split("\\")
           
        let path = pathArr.splice(pathArr.indexOf("public"),pathArr.length).join("/")
       
        req.body.documents = path
        
      }

      await Expense.create(req.body)
     
      res.status(200).json({
        status:"success",
        message:'Expense created successully!'
      })


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

