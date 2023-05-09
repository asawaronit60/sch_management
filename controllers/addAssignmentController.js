const AddAssignment = require('../models/AddAssignment')
const api = require('../utils/apiFactory')
const multer = require('multer');
const Class = require('../models/Class');
const section = require('../models/Section');
const subjectGroups = require('../models/SubjectGroup');
const staff = require('../models/Staff')
const subject = require('../models/Subject');
const AppError = require('../utils/AppError');

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
exports.updateAssignment = api.update(AddAssignment)