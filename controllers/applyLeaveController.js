const Staff = require('../models/Staff')
const leaveType = require('../models/StaffLeaveType')
const ApplyLeave = require('../models/applyLeave')
const multer = require('multer')
const path = require('path')
const AppError = require('../utils/AppError')

const storage = multer.diskStorage({
  
  destination:function(req,file,cb){
    cb(null,`${__dirname}/../public/applyLeave`)
  },
  filename:function(req,file,cb){
    console.log("file name",`idCard-${Date.now()}-${path.extname(file.originalname)}`)
    cb(null,  `document-${Date.now()}${path.extname(file.originalname)}`)
  }
  
})

const upload = multer({storage}).single('document')

exports.getAllLeaves = async(req,res,next)=>{
  try {
    
    let data =await ApplyLeave.findAll({
      include:[{
        model:Staff,
        attributes:['id','name']
      },{
        model:leaveType,
        attributes:['id','type']
      }]
    })

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.applyLeave = async(req,res,next)=>{
  try {
    
    upload(req,res,async(err)=>{

      if(!req.body.leave_type_id)
      return next(new AppError('leave type is required',404))


      if(!req.user || !req.body.staff_id){
        let staff= await Staff.findAll({attributes:['id'], limit:1})
        req.body.staff_id = staff[0].getDataValue('id')
      }

        if(req.file)
        req.body.document = `/public/applyLeave/${req.file.filename}`

        await ApplyLeave.create(req.body)

        res.status(200).json({
          status:'success',
          message:'Leave applied sucessfully!',
        })

    })

  } catch (err) {
    next(err)
  }
}

exports.deleteLeave = async(req,res,next)=>{
  try {
    
    await ApplyLeave.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Applied leave Deleted successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.downloadFile = async(req,res,next)=>{
  try {
    
    let file = await ApplyLeave.findByPk(req.params.id)

    res.download(`${__dirname}/../${file.getDataValue('document')}`)

  } catch (err) {
    next(err)
  }
}