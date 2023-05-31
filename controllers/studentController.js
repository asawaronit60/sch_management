const Student = require('../models/student')
const { Op } = require('sequelize')
const multer = require('multer')
const Class = require('../models/Class')
const Section = require('../models/Section')
const AppError = require('../utils/AppError')
const studentHostel = require('../models/StudentHostel')
const idGenerationSetting = require('../models/GeneralSetting').idGenerationSetting

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/studentDetails`)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }

})

const upload = multer({ storage }).fields([
{name:'image', maxCount: 1}, 
{name:'father_pic',maxCount: 1}, 
{name:'mother_pic',maxCount: 1},
{name:'gaurdian_pic', maxCount: 1},
{name:'document_1',maxCount:1},
{name:'document_2',maxCount:1},
{name:'document_3',maxCount:1},
{name:'document_4',maxCount:1},
])

function generateRandomNumberString(n, key) {
  var numberString = key.toString(); // Convert key to string
  
  for (var i = 0; i < n - key.toString().length; i++) {
    var randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    numberString += randomNumber.toString(); // Append the random number to the string
  }
  
  return numberString;
}


exports.getAllStudent = async (req, res, next) => {
  try {

    let data = await Student.findAll({
      include: [
        {
          model: Class,
          attributes: ['class']
        },
        {
          model: Section,
          attributes: ['section']
        }
      ]
    })

    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.getStudent = async (req, res) => {

  try {

    let student = await Student.findAll({
      where: {
        program_id: req.body.program,
        name: {
          [Op.like]: req.body.search,
        },
        roll_no: req.body.search,
        admission_no: req.body.search
      }//where

    })

    res.status(200).json({
      status: 'success',
      data: student
    })


  } catch (err) {
    res.status(400).json({
      status: 'success',
      message: err.message
    })
  }

}

exports.createStudent = async (req, res, next) => {
  try {

    upload(req, res, async (err) => {

      if (err)
        return res.status(400).json({
          status: 'fail',
          message: err
        })

      if (req.files.image) {
        req.body.image = `public/studentDetails/${req.files.image[0].originalname}` 
      }

      if (req.files.father_pic) {
        req.body.father_pic = `public/studentDetails/${req.files.father_pic[0].originalname}` 
      }

      if (req.files.mother_pic) {
        req.body.mother_pic =`public/studentDetails/${req.files.mother_pic[0].originalname}` 
      }

      if (req.files.gaurdian_pic) {
        req.body.gaurdian_pic = `public/studentDetails/${req.files.gaurdian_pic[0].originalname}` 
      }


      if (req.files.document_1) {
        req.body.document_1 = `public/studentDetails/${req.files.document_1[0].originalname}` 
      }

      if (req.files.document_2) {
        req.body.v = `public/studentDetails/${req.files.document_2[0].originalname}` 
      }

      if (req.files.document_3) {
        req.body.document_3 = `public/studentDetails/${req.files.document_3[0].originalname}` 
      }

      if (req.files.document_4) {
        req.body.document_4 = `public/studentDetails/${req.files.document_4[0].originalname}` 
      }

      let autoIdGeneration = await idGenerationSetting.findByPk(1)
      
      if(autoIdGeneration.getDataValue('auto_admission_no')==='enable'){

        let totalStudents = await Student.count();
        
        let addmPrefix = autoIdGeneration.getDataValue('admission_no_prefix')
        let addmDigits = autoIdGeneration.getDataValue('admission_no_digit')
        let addmStartFrom = autoIdGeneration.getDataValue('admission_no_start_from')

        if([addmDigits,addmPrefix,addmStartFrom].includes(null))
        return next(new AppError('student admission cannot be created as some values are not proper',400))

        let randomNum = generateRandomNumberString(addmDigits,parseInt(addmStartFrom)+totalStudents+1)

        let addmNum = addmPrefix+randomNum;

        console.log(totalStudents,addmPrefix,addmDigits,addmStartFrom,randomNum,addmNum)
        req.body.admission_no = addmNum
      }
 

    let newStudent =   await Student.create(req.body)
        
      if(req.body.hostel_id && req.body.hostel_room_id){
        await studentHostel.create({
          student_id:newStudent.getDataValue('id'),
          hostel_id:req.body.hostel_id,
          hostel_room_id:req.body.hostel_room_id
        })
      }

      res.status(200).json({
        status: 'success',
        message: 'student added successfully!',
      })

    })


  } catch (err) {
    next(err)
  }
}

exports.updateStudent = async (req, res, next) => {


  upload(req, res, async (err) => {
    try {

      if (err)
        return next(new AppError('error uploading image please try again'), 500)
      

      if (req.files.image) {
        req.body.image = `public/studentDetails/${req.files.image[0].originalname}` 
      }

      if (req.files.father_pic) {
        req.body.father_pic =`public/studentDetails/${req.files.father_pic[0].originalname}` 
      }

      if (req.files.mother_pic) {
        req.body.mother_pic = `public/studentDetails/${req.files.mother_pic[0].originalname}` 
      }

      if (req.files.gaurdian_pic) {
        req.body.gaurdian_pic = `public/studentDetails/${req.files.gaurdian_pic[0].originalname}` 
      }


      if (req.files.document_1) {
        req.body.document_1 = `public/studentDetails/${req.files.document_1[0].originalname}` 
      }

      if (req.files.document_2) {
        req.body.v = `public/studentDetails/${req.files.document_2[0].originalname}` 
      }

      if (req.files.document_3) {
        req.body.document_3 = `public/studentDetails/${req.files.document_3[0].originalname}` 
      }

      if (req.files.document_4) {
        req.body.document_4 = `public/studentDetails/${req.files.document_4[0].originalname}` 
      }


      await Student.update(req.body, { where: { id: req.params.id } })

      res.status(200).json({
        status: 'success',
        message: 'student updated successfully!'
      })

    } catch (err) {
      next(err)
    }


  })

}

exports.deleteStudent = async (req, res, next) => {
  try {

    await Student.destroy({ where: { id: req.params.id } })

    res.status(200).json({
      status: 'success',
      message: 'student deleted successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.bulkDelete = async (req, res, next) => {
  try {

    await Student.destroy({
      where: {
        id: { [Op.in]:req.query.id.split(',') }
      }

    })

    res.status(200).json({
      status: 'success',
      message: 'Records Deleted Successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.disabledStudents = async (req, res, next) => {
  try {

    let data = await Student.findAll({
      where: {
        class_id:req.params.class_id,
        section_id:req.params.section_id,
        disable_reason_id: { [Op.not]: null }
      }//where  
    })

    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.getClassSectionStudents = async(req,res,next)=>{
  try {
    
    if(!req.params.class_id)
    return next(new AppError('class is required!',404))


    if(!req.params.section_id)
    return next(new AppError('section is required!',404))


    let data = await Student.findAll({
      where:{
        class_id:req.params.class_id,
        section_id:req.params.section_id
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


exports.promoteStudents = async(req,res,next)=>{
  try {
    
    if(!req.body.newSessionId)
    return next(new AppError('Next session is required!',400))

    if(!req.body.newClassId)
    return next(new AppError('Next Class is required!',400))

    if(!req.body.newSectionId)
    return next(new AppError('Next Section is required!',400))

    if(!req.body.class_id)
    return next(new AppError('Class is required!',400))

    if(!req.body.section_id)
    return next(new AppError('Section is required!',400))


    await Student.update({
      session_id:req.body.newSessionId,
      class_id:req.body.newClassId,
      section_id:req.body.newSectionId
    },
      {
        where:{
          class_id:req.body.class_id,
          section_id:req.body.section_id
        }
    })

    res.status(200).json({
      status:'success',
      message:'Students promoted Successfully!'
    })

  } catch (err) {
    next(err)
  }
}