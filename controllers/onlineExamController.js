const OnlineExam = require('../models/OnlineExam')
const OnlineExamStudents = require('../models/OnlineExamsStudents')
const ExamQuestions = require('../models/ExamQuestions')
const OnlineExamOuestion = require('../models/OnlineExamOuestions')
const Subjects = require('../models/Subject')


exports.getAllExams = async (req, res, next) => {
  try {
    let data = await OnlineExam.findAll()

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
    await OnlineExam.update(req.body, { where: { id: Number(req.params.id) } })

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

    for (const id of student_id) {
      await OnlineExamStudents.create({
        student_id: Number(id),
        online_exam_id: Number(req.body.online_exam_id)
      })
    }

    res.status(200).json({
      status: 'success',
      message: 'Students assigned successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.assignQuestions = async (req, res, next) => {
  try {

    let { question_id } = req.body

    for (const id of question_id) {

      await ExamQuestions.create({
        online_exam_id: Number(req.body.online_exam_id),
        question_id: Number(id)
      })

    }

    res.status(200).json({
      status: 'success',
      message: 'Questions added successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.getExamQuestions = async (req, res, next) => {
  try {

    let data = await OnlineExam.findAll({
      where: {
        online_exam_id: Number(req.params.id)
      },
      include: {
        model: OnlineExamOuestion,
        attributes: ['id', 'question', 'question_type', 'question_level'],
        include: {
          model: Subjects,
          attributes: ['id', 'name']
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