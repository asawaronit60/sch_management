const AdmitCardDesign = require('../models/AdmitCardDesign')
const multer = require('multer');
const AppError = require('../utils/AppError');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/admitCardDesign`);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  }
})

const upload = multer({
  storage:multerStorage
}).fields([
    {name:'right_logo',maxCount:1},
    {name:'left_sign',maxCount:1},
    {name:'middle_sign',maxCount:1},
    {name:'background_image',maxCount:1}
])

exports.getAllDesign = async (req, res, next) => {

  try {

    let data = await AdmitCardDesign.findAll({
      attributes: ['id', 'template', 'background_image']
    })

    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }

}

exports.getDesign = async (req, res, next) => {

  try {

    let data = await AdmitCardDesign.findByPk(req.params.id)

    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }

}

exports.createDesign = async(req,res,next)=>{
  try {

    upload(req,res,async(err)=>{

        if(err)
        return next(new AppError(err.message,500))

      if(req.files.right_logo)
      req.body.right_logo = req.files.right_logo[0].path

      if(req.files.left_sign)
      req.body.left_sign = req.files.left_sign[0].path

      if(req.files.middle_sign)
      req.body.middle_sign = req.files.middle_sign[0].path

      if(req.files.background_image)
      req.body.background_image = req.files.background_image[0].path


        let data = await AdmitCardDesign.create(req.body)

        res.status(200).json({
          status:'success',
          data
        })
    })

  } catch (err) {
    next(err)
  }
}

exports.deleteDesign = async(req,res,next)=>{
  try {
    
    await AdmitCardDesign.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(200).json({
      status:'success',
      message:'data deleted successfully!'
    })


  } catch (err) {
    next(err)
  }
}

exports.updateDesign = async(req,res,next)=>{
  try {

    upload(req,res,async(err)=>{

        if(err)
        return next(new AppError(err,500))

      if(req.files.right_logo)
      req.body.right_logo = req.files.right_logo[0].path

      if(req.files.left_sign)
      req.body.left_sign = req.files.left_sign[0].path

      if(req.files.middle_sign)
      req.body.middle_sign = req.files.middle_sign[0].path

      if(req.files.background_image)
      req.body.background_image = req.files.background_image[0].path

      
        await AdmitCardDesign.update(req.body,{
          where:{
            id:req.params.id
          }
        })

        res.status(200).json({
          status:'success',
          message:'Data updated successfully!'
        })
    })

  } catch (err) {
    next(err)
  }
}