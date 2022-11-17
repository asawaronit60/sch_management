const Income = require('../models/Income')
const ApiFactory = require('../utils/apiFactory')
const IncomeHead = require('../models/IncomeHead')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null, `${__dirname}/../public/incomeDocuments` )
  },
  filename:function(req,file,cb){
   cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
  }
})



const upload = multer({storage}).single('documents')



exports.getAllIncome = async(req,res)=>{

  try {
    
    let data = await Income.findAll({
      include:{
        model:IncomeHead,
        attributes:['income_category']
      }
    })

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      stauts:'success',
      message:err.message
    })
  }


}

exports.createIncome = async(req,res)=>{

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
   
    await Income.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Income Added Successfully!'
    })


    })


  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}

exports.updateIncome = ApiFactory.update(Income)

exports.deleteIncome = ApiFactory.delete(Income)