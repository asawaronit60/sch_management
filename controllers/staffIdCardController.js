const staffIdCard = require('../models/StaffIdCard')
const api = require('../utils/apiFactory');
const AppError = require('../utils/AppError');
const multer = require('multer')
const path = require('path');
const Staff = require('../models/Staff');
const storage = multer.diskStorage({
  
  destination:function(req,file,cb){
    cb(null,`${__dirname}/../public/certificates/idCard`)
  },
  filename:function(req,file,cb){
    console.log("file name",`idCard-${Date.now()}-${path.extname(file.originalname)}`)
    cb(null,  `staffIdCard-${Date.now()}${path.extname(file.originalname)}`)
  }
  
})

const uploads = multer({storage}).fields([
  {name:'background',maxCount:1},
  {name:'logo',maxCount:1},
  {name:'sign_image',maxCount:1}
])



exports.getAllIdCards = api.getAll(staffIdCard)


exports.getIdCard = async(req,res,next)=>{
  try {
    let data = await staffIdCard.findByPk(req.params.id)

    res.status(200).json({
      status:'success',
      data
    })
  } catch (err) {
    next(err)
  }
}


exports.createIdCards = async (req, res, next) => {
  try {

    uploads(req, res, async (err) => {

      if (err)
        return next(new AppError('error uploading image!', 500))

      if (req.files.background)
        req.body.background = 'public/certificates/idCard/' + req.files.background[0].filename
      if (req.files.logo)
        req.body.logo = 'public/certificates/idCard/' + req.files.logo[0].filename
      if (req.files.sign_image)
        req.body.sign_image = 'public/certificates/idCard/' + req.files.sign_image[0].filename

      await staffIdCard.create(req.body)

      res.status(200).json({
        status: 'success',
        message: 'staff Id card created successfully!',
        data: req.body
      })

    })


  } catch (err) {
    next(err)
  }
}


exports.deleteIdCards = api.delete(staffIdCard)

exports.updateIdCards = async (req, res, next) => {
  try {

    uploads(req,res,async(err)=>{

      if (err){
        console.log(err)
        return next(new AppError('error uploading image!'+err, 500))
}
      if (req.files.background)
        req.body.background = 'public/certificates/idCard/' + req.files.background[0].filename
      if (req.files.logo)
        req.body.logo = 'public/certificates/idCard/' + req.files.logo[0].filename
      if (req.files.sign_image)
        req.body.sign_image = 'public/certificates/idCard/' + req.files.sign_image[0].filename

      await staffIdCard.update(req.body,{
        where:{
          id:req.params.id
        }
      })

      res.status(200).json({
        status: 'success',
        message: ' staff Id card updated successfully!',
        data: req.body
      })

    })


  } catch (err) {
    next(err)
  }
}


exports.searchGenerateIdCard = async (req, res) => {

  try {

    let data = await Staff.findAll({
      where:{
        role_id:req.params.role_id
      }
    })

    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }

}