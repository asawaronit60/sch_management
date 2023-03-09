const examGroup = require('../models/ExamGroup')
const examType = require('../models/ExamType')
const examGroupExam = require('../models/examGroupExam')
const examGroupExamStudents = require('../models/examGroupExamStudents')
const examGroupExamSubjects = require('../models/examGroupExamSubjects')
const Subjects = require('../models/Subject')
const exam = require('../models/Exams')

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

    await examGroup.create(req.body)

    res.status(200).json({
      status: 'success',
      message: 'Group created Successfully!'
    })

  } catch (err) {
    next(err)
  }
}
exports.getAllExams = async(req,res,next)=>{
  try {
    let data = await examGroupExam.findAll({
      where:{
        exam_group_id:Number(req.params.id)
      },
      include:{
        model:exam
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
exports.createExamGroupExams = async (req, res, next) => {
  try {

    await examGroupExam.create(req.body)
    res.status(200).json({
      status: 'success',
      message: 'Group exams created Successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.assignExamGroupExamStudents = async(req,res,next)=>{
  try {
    
    let {student_ids} = req.body

    for (const id of student_ids){
      await examGroupExamStudents.create({
        student_id:Number(id),
        exam_group_exam_id:req.body.examGroupExamId
      })
    }

    res.status(200).json({
      status:'success',
      message:'Data added successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.assignExamGroupExamSubjects = async(req,res,next)=>{
  try {
    
    await examGroupExamSubjects.bulkCreate(req.body)

    res.status(200).json({
      status:'success',
      message:'data added successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.getAssignedSubjects = async(req,res,next)=>{
  try {
    
    let data = await examGroupExamSubjects.findAll({
      where:{
        exam_group_exam_id:Number(req.params.id)
      },
      include:{
        model:Subjects,
        attributes:['name']
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
exports.unAssignExamSubjects = async(req,res,next)=>{
  
  try {
    
    await examGroupExamSubjects.destroy({
      where:{
        id:Number(req.params.id)
      }
    })

    res.status(200).json({
      status:'success',
      message:'Subject removed successfully!'
    })

  } catch (err) {
    next(err)
  }
}