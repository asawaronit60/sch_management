const OnlineExam = require('../models/OnlineExam')
const OnlineExamStudents = require('../models/OnlineExamsStudents')
const ExamQuestions = require('../models/ExamQuestions')
const OnlineExamOuestion = require('../models/OnlineExamOuestions')
const Subjects = require('../models/Subject')
const { Op } = require('sequelize')
const AppError = require('../utils/AppError')
const Student = require('../models/student')
const Category = require('../models/Category')



exports.getClosedExams = async (req, res, next) => {
  try {

    console.log(req.body.hello)

    let data = await OnlineExam.findAll({
      where: {
        exam_from: { [Op.lte]: new Date().toISOString() }
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

exports.getUpcomingExams = async (req, res, next) => {
  try {

    let data = await OnlineExam.findAll({
      where: {
        exam_from: { [Op.gte]: new Date().toISOString() }
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

exports.createOnlineExam = async (req, res, next) => {
  try {

    await OnlineExam.create(req.body)
    res.status(200).json({
      status: 'success',
      message: 'online exam created sucessfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.deleteOnlineExam = async (req, res, next) => {
  try {
    await OnlineExam.destroy({ where: { id: Number(req.params.id) } })
    res.status(200).json({
      status: 'success',
      message: 'online exam deleted sucessfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.updateOnlineExam = async (req, res, next) => {
  try {
    await OnlineExam.update(req.body, { where: { id: req.params.id } })

    res.status(200).json({
      status: 'success',
      message: 'online exam updated sucessfully!'
    })
  } catch (err) {
    next(err)
  }
}


exports.assignStudents = async (req, res, next) => {
  try {

    let { student_id } = req.body

    let alreadyExists = await OnlineExamStudents.findOne({where:{
      student_id,
      online_exam_id:req.body.online_exam_id
     }
    })
  
    // for (const id of student_id) {
    if(!alreadyExists)
    await OnlineExamStudents.create({
        student_id,
        online_exam_id:req.body.online_exam_id
      })
   
      // }

    res.status(200).json({
      status: 'success',
      message: 'Student assigned successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.unAssignStudent = async(req,res,next)=>{
  try {
    
    await OnlineExamStudents.destroy({where:{
      student_id:req.body.student_id,
      online_exam_id:req.body.online_exam_id
    }
  })

    res.status(200).json({
      status:'success',
      message:'Student deleted succesfully!'
    })
  } catch (err) {
    next(err)
  }
}


exports.getAssignedStudents = async(req,res,next)=>{
  try {
    let results = []
    let students = await Student.findAll({
      attributes:['id','admission_no','fullname','father_name','gender'],
      where:{
        class_id:req.params.class_id,
        section_id:req.params.section_id
      },
      // include:{
      //   model:Category,
      //   attributes:['id','category']
      // }
    })

    for(const student of students){

      let obj = {}
      obj.student_id = student.getDataValue('id')
      obj.admission_no = student.getDataValue('admission_no')
      obj.fullname = student.getDataValue('fullname')
      obj.father_name = student.getDataValue('father_name')
      obj.gender = student.getDataValue('gender')
      // obj.category = student.getDataValue('category')

      let data = await OnlineExamStudents.findOne({
        where:{  
          online_exam_id:req.params.exam_id,
          student_id:student.getDataValue('id')
        }
      })
      
    

      if(data){
      obj.exam_student_id = data.getDataValue('id')
      obj.exists = true
      }else obj.exists = false

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

exports.assignQuestions = async (req, res, next) => {
  try {

    let { question} = req.body

    // if (!Array.isArray(questions)) {
    //   return next(new AppError('Question id should be a list/array', 400))
    // }

    // for (const question of questions) {

      let isAlreadyExists = await ExamQuestions.findOne({
        where:{
          online_exam_id: req.body.online_exam_id,
          question_id: question.id,
        }
      })

      if(isAlreadyExists)
      return next(new AppError('Question already exists',400))

      await ExamQuestions.create({
        online_exam_id: req.body.online_exam_id,
        question_id: question.id,
        marks: question.marks ? question.marks : null,
        negative_marks: question.negative_marks ? question.negative_marks : null
      })

    // }

    res.status(200).json({
      status: 'success',
      message: 'Questions added successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.unAssignQuestion = async(req,res,next)=>{
  try {
    
    await ExamQuestions.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'exam question deleted successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.getExamQuestions = async (req, res, next) => {
  try {

    let whereObj = {}
    if(req.query.subject_id)
    whereObj.subject_id = req.query.subject_id

    let data = await ExamQuestions.findAll({
      where: {
        online_exam_id: req.params.id
      },
      include: {
        model: OnlineExamOuestion,
        where:whereObj,
        attributes: ['id', 'question', 'question_type', 'question_level'],
        include: {
          model: Subjects,
          attributes: ['id', 'name'],
        }
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

exports.getListToAddQuestions =async(req,res,next)=>{

  try {

    let whereObj = {}
    
    if(req.query.question_type)
      whereObj.question_type = req.query.question_type

      if(req.query.question_level)
      whereObj.question_level = req.query.question_level
    
    if(req.query.subject_id)
      whereObj.subject_id = req.query.subject_id

      if(req.query.class_id)
      whereObj.class_id = req.query.class_id
      
    if(req.query.section_id)
    whereObj.section_id = req.query.section_id

    if(req.query.keyword)
    whereObj.question = req.query.keyword

    let allQuestions = await OnlineExamOuestion.findAll({
      where:whereObj,
      include:{
        model:Subjects,
        attributes:['id','name']
      }
    })

    let results = []

    for (const question of allQuestions){

      let obj = {}
      obj.id = question.getDataValue('id')
      obj.question = question.getDataValue('question')
      obj.question_type = question.getDataValue('question_type')
      obj.question_level = question.getDataValue('question_level')
      obj.subject = question.getDataValue('subject')
      obj.exists = false
      obj.marks = 1.00
      obj.negative_marks = 0.25

      let isPresent = await ExamQuestions.findOne({
        where:{
          question_id:question.getDataValue('id'),
          online_exam_id:req.params.id
      }
    })

    if(isPresent){
      obj.exists = true
      obj.marks = isPresent.getDataValue('marks')
      obj.negative_marks = isPresent.getDataValue('negative_marks')
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