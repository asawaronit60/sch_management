const {onlineAdmissionFormSetting,onlineAdmissionFormFields} = require('../models/OnlineAdmissionSetting')
const path = require('path')
const multer = require('multer')
const exists = require('fs')
const storage = multer.diskStorage({

  destination:function(req,file,cb){
    cb(null,'./public/onlineAdmissionForms')
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }

})

const upload = multer({storage}).single('online_admission_admission_form')

exports.getOnlineAdmissionFormSetting = async(req,res,next)=>{
  try {
    
    let data = await onlineAdmissionFormSetting.findByPk(1)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.updateOnlineAdmissionFormSetting = async(req,res,next)=>{
  try {

    upload(req,res,async(err)=>{

      if(req.file)
      req.body.online_admission_admission_form = `/public/onlineAdmissionForms/${req.file.filename}`

      await onlineAdmissionFormSetting.update(req.body,{
        where:{
          id:1
        }
      })
  
      res.status(200).json({
        status:'success',
        message:'updated successfully!'
      })
  
    })
    
  } catch (err) {
    next(err)
  }
}

exports.getFile = async(req,res,next)=>{
  try {
    
    let data = await onlineAdmissionFormSetting.findByPk(1)
    console.log(data)
      ///public/onlineAdmissionForms/BMTC.pdf
    const filePath = path.join(`${__dirname}`,'../', data.getDataValue('online_admission_admission_form')); 
    // const filePath = `${__dirname}../public/onlineAdmissionForms/${data.getDataValue('online_admission_admission_form')}`
    console.log(filePath)
    // Check if the file exists
    if (exists.existsSync(filePath)) {
      res.sendFile(filePath)
    } else {
      res.status(404).send('File not found')
    }

  } catch (err) {
    next(err)
  }
}


exports.getOnlineAdmissionFormFields = async(req,res,next)=>{

  try {
    
    let data = await onlineAdmissionFormFields.findByPk(1)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }

}

exports.updateOnlineAdmissionFormFields = async(req,res,next)=>{

  try {
    
     await onlineAdmissionFormFields.update(req.body,{where:{id:1}})

    res.status(200).json({
      status:'success',
      message:'updated!'
    })

  } catch (err) {
    next(err)
  }

}
