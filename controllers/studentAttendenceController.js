const AttendenceType = require('../models/AttendenceType')
const Student = require('../models/student')
const StudentAttendence = require('../models/StudentAttendence')
const multer = require('multer')
const ApproveLeave = require('../models/ApproveLeave')
const Staff = require('../models/Staff')
const Class = require('../models/Class')
const Section = require('../models/Section')
const appError=  require('../utils/appError')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/approveLeave')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
      cb(null,  file.fieldname + '-' + uniqueSuffix + "." + file.mimetype.split('/')[1])
    }
})

const upload = multer({ storage}).single('document')

exports.getFile = async(req,res,next)=>{
  try {
    
    let file_name = await ApproveLeave.findByPk(req.params.id,{
      attributes:['id','document']
    })

    res.download(`${__dirname}../${file_name.getDataValue('document')}`)


  } catch (err) {
    next(err)
  }
}

exports.getAllLeave = async(req,res,next)=>{
  try {
    
    let data = await ApproveLeave.findAll({
      where:{
        class_id:req.body.class_id,
        section_id:req.body.section_id
      },
      include:[
        {
          model:Class,
          attributes:['class']
        },
        {
          model:Section,
          attributes:['section']
        },
        {
          model:Staff,
          attributes:['name']
        }
      ]
    })

    res.staff(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.addLeave = async(req,res,next)=>{
  try {
    
   upload(req,res,async(err)=>{

      if(err)
      return next(new appError('error uploading file',500))

      if(!req.user){
        let staff = await Staff.findAll({limit:1})
        req.body.approved_by_id = staff[0].getDataValue('id')
      }
  
      if(req.file)
      req.body.document = req.file.path

      await ApproveLeave.create(req.body)
  
      res.status(200).json({
        status:'success',
        message:'Leave added successfully!'
      })

   })



  } catch (err) {
    next(err)
  }
}

exports.getAllStudentAttence = async(req,res,next)=>{
  try {
    let data =await StudentAttendence.findAll({
      attributes:['id'],
      include:[
        {
          model:AttendenceType,
          attributes:['id','type']
        },
        {
          model:Student,
          attributes:['id','admission_no','firstname'],
          where:{
            class_id:req.body.class_id,
            section_id:req.body.section_id
          }
        }
      ],
      where:{
        date:req.body.date
      }
     
    })

  

    res.status(200).json({
      status:'success',
      data
    })
  } catch (err) {
    next(err)
  }
}

exports.createStudentAttendence = async(req,res,next)=>{
  try {
    await StudentAttendence.create(req.body)
    res.status(200).json({
      status:'success',
      message:'Attendence added successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.deleteStudentAttendence = async(req,res,next)=>{
  try {
    await StudentAttendence.destroy({where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'Studence attendence deleted successfully'
    })
  } catch (err) {
    next(err)
  }
}

exports.updateStudentAttendence = async(req,res,next)=>{
  try {

    await StudentAttendence.update(req.body,{where:{id:req.parms.id}})
    res.status(200).json({
      status:'success',
      message:'Student Attendence updated successfully!'
    })

  } catch (err) {
   next(err)
  }
}