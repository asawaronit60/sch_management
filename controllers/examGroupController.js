const examGroup = require('../models/ExamGroup')
const examType = require('../models/ExamType')
const examGroupExam = require('../models/examGroupExam')
const examGroupExamStudents = require('../models/examGroupExamStudents')
const examGroupExamSubjects = require('../models/examGroupExamSubjects')
const Subjects = require('../models/Subject')
const exam = require('../models/Exams')
const multer = require('multer')
const appError = require('../utils/appError')
const examMarks = require('../models/examMarks')
const fs = require('fs')
const path = require('path')
const {parse} = require('csv-parse')
const Student = require('../models/student')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/examMarks`)
  },
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if(ext !== '.csv') {
        return cb(new Error('Only csv are allowed'))
    }
    cb(null, true)
},
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage }).single('marks')


exports.getAllExamGroups = async (req, res, next) => {

  try {

    let data = await examGroup.findAll({
      include: {
        model: examType
      }
    })

    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.createExamGroup = async (req, res, next) => {
  try {

    if(!req.body.exam_type_id)
    return next(new appError('Exam type is required',400))

    await examGroup.create(req.body)

    res.status(200).json({
      status: 'success',
      message: 'Group created Successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.deleteExamGroup =async(req,res,next)=>{
  try {
    await examGroup.destroy({where:{id:req.params.id}})
    res.status(200).json({
      status: 'success',
      message: 'Group group deleted Successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.updateExamGroup =async(req,res,next)=>{
  try {

    await examGroup.update(req.body,{where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'Exam group updated successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.getAllExams = async (req, res, next) => {
  try {
    let data = await examGroupExam.findAll({
      attributes:[['id','exam_group_exam_id'],'createdAt','updatedAt','exam_group_id','exam_id'],
      where: {
        exam_group_id: Number(req.params.id)
      },
      include:[ {
        model: exam
      },{
        model:examGroup
      }]
    })

    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }
}
exports.createExamGroupExams = async (req, res, next) => {
  try {

    let {exams_id} = req.body

    if(!req.body.exam_group_id)
    return next(new appError('Exam group is required!',400))

    if(exams_id.length===0)
    return next(new appError('Atleast 1 exam is required!',400))

    for (const  id of exams_id){

      

      await examGroupExam.create({
        exam_id:id,
        exam_group_id:req.body.exam_group_id
      })
    
    }

    // await examGroupExam.create(req.body)
    res.status(200).json({
      status: 'success',
      message: 'Group exams created Successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.assignExamGroupExamStudents = async (req, res, next) => {
  try {

    let { student_ids } = req.body

    for (const id of req.body.student_ids) {

      let isAlreadyExists = await examGroupExamStudents.findOne({
        where:{
          student_id: Number(id),
          exam_group_exam_id: req.body.examGroupExamId
        }
      })

      if(!isAlreadyExists)
      await examGroupExamStudents.create({
        student_id: Number(id),
        exam_group_exam_id: req.body.examGroupExamId
      })
      
    }

    res.status(200).json({
      status: 'success',
      message: 'Data added successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.getExamGroupExamStudents = async(req,res,next)=>{
  try {
    
    let students = await Student.findAll({
      attributes:['id','admission_no','fullname','father_name','caste','gender'],
      where:{class_id:req.body.class_id,section_id:req.body.section_id}
    })
    
    let results = []

    for(const student of students){

      let obj = {}

      obj.student_id = student.getDataValue('id')
      obj.admission_no = student.getDataValue('admission_no')
      obj.fullname = student.getDataValue('fullname')
      obj.father_name = student.getDataValue('father_name')
      obj.father_name = student.getDataValue('father_name')
      obj.caste = student.getDataValue('caste')
      obj.gender = student.getDataValue('gender')

      let data =await examGroupExamStudents.findOne({
        where:{student_id:student.getDataValue('id')},
        include:{
          model:Student,
          attributes:[['id','student_id'],'admission_no','fullname','father_name','caste','gender'],
          where:{
            class_id:req.body.class_id,
            section_id:req.body.section_id
          }
        }
      })

      if(data)
      obj.exists = true

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

exports.assignExamGroupExamSubjects = async (req, res, next) => {
  try {

    await examGroupExamSubjects.bulkCreate(req.body)

    res.status(200).json({
      status: 'success',
      message: 'data added successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.getAssignedSubjects = async (req, res, next) => {
  try {

    let data = await examGroupExamSubjects.findAll({
      where: {
        exam_group_exam_id: Number(req.params.id)
      },
      include: {
        model: Subjects,
        attributes: ['name']
      }
    })

    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }
}
exports.unAssignExamSubjects = async (req, res, next) => {

  try {

    await examGroupExamSubjects.destroy({
      where: {
        id: Number(req.params.id)
      }
    })

    res.status(200).json({
      status: 'success',
      message: 'Subject removed successfully!'
    })

  } catch (err) {
    next(err)
  }
}


exports.uploadMarks = async (req, res, next) => {
  try {

    let examGroupExamSubjectId = req.params.id

    upload(req, res, async (err) => {

      if (err)
        return next(err)

      if (!req.file)
        return next(new appError('Please upload a file', 404))

      req.body.marks = req.file.path
      req.body.exam_group_exam_subject_id = examGroupExamSubjectId

      const marks = []

      fs.createReadStream(req.body.marks)
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", row => {
          let obj = {}
          obj.addmission_no = row[0]
          obj.status = row[1]
          obj.marks = row[2]
          obj.note = row[3]
          marks.push(obj)
          console.log(marks)
        })
          console.log(marks)
      // await examMarks.create(req.body)

      res.status(200).json({
        status: 'success',
        body:req.body,
        data:marks,
        message: 'Marks uploaded successfully!'
      })

    })


  } catch (err) {
    next(err)
  }
}