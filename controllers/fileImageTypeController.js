const dataUploadSettings = require('../models/FileImageTypeSettings')

exports.getFileTypes = async(req,res,next)=>{
  try {

    let data = await  dataUploadSettings.fileType.findByPk(1)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err) 
  }
}

exports.updateFileTypes = async(req,res,next)=>{
  try {

     await  dataUploadSettings.fileType.update(req.body,{where:{id:1}})

    res.status(200).json({
      status:'success',
      message:'updated'
    })

  } catch (err) {
    next(err) 
  }
}


exports.getImageTypes = async(req,res,next)=>{
  try {

    let data = await  dataUploadSettings.imageType.findByPk(1)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err) 
  }
}

exports.updateImageTypes = async(req,res,next)=>{
  try {

     await  dataUploadSettings.imageType.update(req.body,{where:{id:1}})

    res.status(200).json({
      status:'success',
      message:'updated'
    })

  } catch (err) {
    next(err) 
  }
}