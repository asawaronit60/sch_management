const AddAssignment = require('../models/AddAssignment')
const api = require('../utils/apiFactory')
const multer = require('multer');
const Class = require('../models/Class');
const section = require('../models/Section');
const subjectGroups = require('../models/SubjectGroup');
const staff = require('../models/Staff')
const subject = require('../models/Subject');
const AppError = require('../utils/AppError');
const { Op } = require('sequelize');
const { trace } = require('../routes/admissionEnquiry');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/addHomework`);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
}).single('document')


exports.getAllAssignment = async(req,res,next)=>{

  try {
    
    let data = await AddAssignment.findAll({
      include:[
        {
          model:Class,
          attributes:['class']
        },
        {
          model:section,
          attributes:['section']
        },
        {
          model:staff,
          attributes:['name']
        },
        {
          model:subjectGroups,
          attributes:['name']
        },
        {
          model:subject,
          attributes:['name']
        }
      ]
    })

    res.status(200).json({
      stauts:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.getUpcomingHomework = async(req,res,next)=>{
  try {
    
    let whereObj = {}

    whereObj.submission_date ={ [Op.gte] : new Date().toISOString().split("T")[0]}

    if(!req.body.class_id)
    return next(new AppError('Please select a class',400))

    whereObj.class_id = req.body.class_id

    if(req.body.section_id)
    whereObj.section_id = req.body.section_id

    if(req.body.subject_group_id)
    whereObj.subject_group_id = req.body.subject_group_id
    
    if(req.body.subject_id)
    whereObj.subject_id = req.body.subject_id
  

    let data = await AddAssignment.findAll({
      where:whereObj
    })

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}


exports.getClosedHomework = async(req,res,next)=>{
  try {
    
    let whereObj = {}

    whereObj.submission_date ={ [Op.lte] : new Date().toISOString().split("T")[0]}

    if(!req.body.class_id)
    return next(new AppError('Please select a class',400))

    whereObj.class_id = req.body.class_id

    if(req.body.section_id)
    whereObj.section_id = req.body.section_id

    if(req.body.subject_group_id)
    whereObj.subject_group_id = req.body.subject_group_id
    
    if(req.body.subject_id)
    whereObj.subject_id = req.body.subject_id
  

    let data = await AddAssignment.findAll({
      where:whereObj
    })

    res.status(200).json({
      status:'success',
      data
    })
    
  } catch (err) {
    next(err)
  }
}

exports.createAssignment = async(req,res,next)=>{

  try {

    upload(req,res,async(err) =>{

        if(err){
          res.status(400).json({
            status:'Error uploading document!',
            message:err.message
          })
        }

        if(!req.body.class_id)
        return next(new AppError('Class is required',400))

        if(!req.body.section_id)
        return next(new AppError('Section is required',400))

        if(!req.body.subject_group_id)
        return next(new AppError('Subject Group is required',400))

        
        if(!req.body.subject_id)
        return next(new AppError('Subject is required',400))


        if(req.file)
        req.body.document = `/public/addHomework/${req.file.filename}`
  

        await AddAssignment.create(req.body)

      res.status(200).json({
        status:'success',
        message:'Assignment uploaded successfully!',
        data:req.body
      })

    })


  } catch (err) {
    next(err)
  }



}
exports.deleteAssignment = api.delete(AddAssignment)

exports.deleteMultiple = async(req,res,next)=>{
  try {
    
    if(!Array.isArray(req.body.id))
    return next(new AppError('Ids not an array',500))

    await AddAssignment.destroy({
        where:{
          id:{[Op.in]: req.body.id }
        }
    })

  } catch (err) {
    next(err)
  }
}

exports.updateAssignment = async(req,res,next)=>{
  try {

    upload(req,res,async(err)=>{

      if(req.file)
      req.body.document = `/public/addHomework/${req.file.filename}`

      await AddAssignment.update(req.body,{
        where:{
          id:req.params.id
        }
      })

      res.status(200).json({
        status:'success',
        message:'Assignment updated successfully!',
        data:req.body
      })

    })
    

  } catch (err) {
    next(err)
  }
}