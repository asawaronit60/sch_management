const {emailTemplate,smsTemplate} = require('../models/EmailSmsTemplate')
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null, `${__dirname}/../public/emailDocuments` )
  },
  filename:function(req,file,cb){
   cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
  }
})



const upload = multer({storage}).single('document')


exports.getAllEmail = async(req,res,next)=>{
  try {
    
    let data = await emailTemplate.findAll()

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}


exports.getEmail = async(req,res,next)=>{
  try {
    
    let data = await emailTemplate.findByPk(req.params.id)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.getAllSms = async(req,res,next)=>{
  try {
    
    let data = await smsTemplate.findAll()

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.getSms = async(req,res,next)=>{
  try {
    
    let data = await smsTemplate.findByPk(req.params.id)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.createEmailTemplate = async(req,res,next)=>{

  try {
    
    upload(req,res,async(err)=>{

      if(req.file){
      req.body.document = `/public/emailDocuments/${req.file.filename}`
      req.body.document_original_name = req.file.originalname
      req.body.document_type = req.file.mimetype
}
      await emailTemplate.create(req.body)

      res.status(200).json({
        status:'success',
        message:'Email Template added!'
      })

    })


  } catch (err) {
    next(err)
  }


}


exports.createSmsTemplate = async(req,res,next)=>{

  try {
    
      await smsTemplate.create(req.body)

      res.status(200).json({
        status:'success',
        message:'Sms Template added!'
      })


  } catch (err) {
    next(err)
  }

}

exports.deleteEmailTemplate = async(req,res,next)=>{

  try {
    
      await emailTemplate.destroy({
        where:{
          id:req.params.id
        }
      })

      res.status(200).json({
        status:'success',
        message:'Email Template deleted!'
      })


  } catch (err) {
    next(err)
  }

}

exports.deleteSmsTemplate = async(req,res,next)=>{

  try {
    
      await smsTemplate.destroy({
        where:{
          id:req.params.id
        }
      })

      res.status(200).json({
        status:'success',
        message:'Sms Template deleted!'
      })


  } catch (err) {
    next(err)
  }

}

exports.updateEmailTemplate = async(req,res,next)=>{

  try {
    
    upload(req,res,async(err)=>{

      if(req.file)
      req.body.document = `./public/emailDocuments/${req.file.filename}`

      await emailTemplate.update(req.body,{
        where:{
          id:req.params.id
        }
      })

      res.status(200).json({
        status:'success',
        message:'Email Template updated!'
      })

    })


  } catch (err) {
    next(err)
  }


}


exports.updateSmsTemplate = async(req,res,next)=>{

  try {
    
      await smsTemplate.update(req.body,{
        where:{
          id:req.params.id
        }
      })

      res.status(200).json({
        status:'success',
        message:'Sms Template updated!'
      })


  } catch (err) {
    next(err)
  }

}