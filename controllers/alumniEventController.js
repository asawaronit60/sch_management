const {Event,manageAlumni} = require('../models/Events')
const api = require('../utils/apiFactory')
const { sequelize } = require('../connection')
const Class = require('../models/Class')
const Session = require('../models/Session')
const AppError = require('../utils/AppError')
const multer = require('multer')
const Student = require('../models/student')
const Section = require('../models/Section')

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/alumniEvent`);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `photo-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
}).single('photo')

const multerStorageAlumni = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/alumniEvent`);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `photo-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const uploadAlumni = multer({
  storage: multerStorageAlumni,
}).single('current_photo')

exports.getAllAlumniEvent = async (req, res, next) => {

  try {

    let data = await Event.findAll({
      include:[
        {
          model:Class,
          attributes:['id','class']
        },
        {
          model:Session,
          attributes:['id','session']
        }
      ],
      order:[['event_from_date','desc']]
    })



    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }

}

exports.createAlumniEvent = async (req, res,next) => {

  try {

    upload(req,res,async(err)=>{

      if(req.body.event_for==='class'){
      
        if(!req.body.passout_session_id)
        return next(new AppError('session is required!',400))
  
        if(!req.body.class_id)
        return next(new AppError('class is required!',400))
  
        if(!req.body.sections.length>0)
        return next(new AppError('session id is required!',400))
      }
  
      if(req.file)
      req.body.photo = `/public/alumniEvent/${req.file.filename}`

     let newEvent = await Event.create(req.body)

      res.status(200).json({
        status:'success',
        message:'Event added Successfully!',
        data:newEvent
      })

    })

  

  } catch (err) {
   next(err)
  }


}
exports.deleteAlumniEvent = api.delete(Event)
exports.updateAlumniEvent = api.update(Event)


exports.getAllAlumni = async(req,res,next)=>{
  try {
    
    let whereObj = {}

    whereObj.class_id=req.body.class_id,
    whereObj.session_id=req.body.session_id

    if(req.body.section_id)
    whereObj.section_id = req.body.section_id

    if(req.body.admission_no)
    whereObj.admission_no = req.body.admission_no

    let results = []

    let students = await Student.findAll({
      attributes:['id','admission_no','gender'],
      include:[
      //   {
      //   model:Student,
      //   where:whereObj
      // },
      {
        model:Class,
        attributes:['id','class']
      },
      {
        model:Section,
        attributes:['id','section']
      }
    ]
    })


    for(const student of students){

      let obj = {}
      obj.student_id = student.getDataValue('id')
      obj.admission_no = student.getDataValue('admission_no')
      obj.class = student.getDataValue('class')
      obj.section = student.getDataValue('section')
      obj.gender = student.getDataValue('gender')
      obj.current_email = null
      obj.current_phone = null

      let isPresent = await manageAlumni.findOne({where:{student_id:student.getDataValue('id')}})

      if(isPresent){
        obj.alumni_id = isPresent.getDataValue('id')
        obj.current_email = isPresent.getDataValue('current_email')
        obj.current_phone = isPresent.getDataValue('current_phone')
      }

      results.push(obj)
    }

    res.status(200).json({
      status:'success',
      data:results
    })

  } catch (err) {
    next(err)
  }
}

exports.updateAlumni = async(req,res,next)=>{
  try {
    
    uploadAlumni(req,res,async(err)=>{

      if(req.file)
      req.body.current_photo = `/public/${req.file.filename}`

      let student_id = req.params.id

      let alreadyExists = await manageAlumni.findOne({where:{ student_id }})

      if(alreadyExists)
      await manageAlumni.update(req.body,{where:{id:alreadyExists.getDataValue('id')}})

      else {
        req.body.student_id = student_id
        await manageAlumni.create(req.body)
      }

      
      res.status(200).json({
        status:'success',
        message:'Record saved successfully!'
      })
        
    })
 

  } catch (err) {
    next(err)
  }
}

exports.deleteAlumni = async(req,res,next)=>{
  try {
    
  await manageAlumni.destroy({where:{id:req.params.id}})    

  res.status(200).json({
    status:'success',
    message:'Alumni deleted!'
  })

  } catch (err) {
    next(err)
  }
}