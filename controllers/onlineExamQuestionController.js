
const { Op } = require('sequelize')
const OnlineExamQuestions = require('../models/OnlineExamOuestions')
const Staff = require('../models/Staff')
const Subject = require('../models/Subject')
const AppError = require('../utils/AppError')

function getAns(answer) {
  // let ans_true_false = null, ans_single = null, ans_multiple = null

  let ansArr = JSON.parse(answer).split(",")

  if (ansArr.length === 1) {
    let ans = ansArr[0];

    if (ans === 'true' || ans === 'false')
      return {
        type:'answer_true_false',
        ans:(ans==='true')
      }

      else return {
        type:'answer_single',
        ans:ans.toLowerCase()
      }
  }

  else {
    return {type:'answer_multiple',ans: JSON.stringify(ansArr)}
  }

}

exports.getAllExamQuestions = async (req, res, next) => {
  try {

    let whereObj = {}

    if(req.body.class_id)
    whereObj.class_id = req.body.class_id

    if(req.body.section_id)
    whereObj.section_id = req.body.section_id

    if(req.body.subject_id)
    whereObj.subject_id = req.body.subject_id

    if(req.body.question_type)
    whereObj.question_type = req.body.question_type

    if(req.body.created_by_id)
    whereObj.created_by_id = req.body.created_by_id

    if(req.body.question_level)
    whereObj.question_level = req.body.question_level

    console.log(whereObj)

    let data = await OnlineExamQuestions.findAll({
      where:whereObj,
      include: [{
        model: Subject,
        attributes: ['id', 'name']
      }, {
        model: Staff,
        attributes: ['id', 'name']
      }],
      order: [['id', 'desc']]

    })

    res.status(200).json({
      status: 'success',
      data
    })


  } catch (err) {
    next(err)
  }
}

exports.getExamQuestion = async(req,res,next)=>{
  try {
    
    let data = await OnlineExamQuestions.findByPk(req.params.id,{
      include: [{
        model: Subject,
        attributes: ['id', 'name']
      }, {
        model: Staff,
        attributes: ['id', 'name']
      }],
      order: [['id', 'desc']]

    })

    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.createExamQuestion = async (req, res, next) => {
  try {

    if (!req.user) {
      let staff = await Staff.findAll({ limit: 1 })
      req.body.created_by_id = staff[0].getDataValue('id')
    }

    if (!req.body.subject_id)
      return next(new AppError('Subject is required!', 400))

    if (!req.body.question_type)
      return next(new AppError('question type is required!', 400))

    if (!req.body.question_level)
      return next(new AppError('question level is required!', 400))

    if (!req.body.class_id)
      return next(new AppError('class is required!', 400))

    if (!req.body.question)
      return next(new AppError('question is required!', 400))

    if (!req.body.answer)
      return next(new AppError('answer is required!', 400))

    let answer = getAns(JSON.stringify(req.body.answer))
      console.log(answer)
    req.body[answer.type ]= answer.ans
        
    await OnlineExamQuestions.create(req.body)

        res.status(200).json({
          status: 'success',
          message: 'Online exam question created successfully!',
          data: req.body,
          answer
        })

  } catch (err) {
    next(err)
  }
}

exports.deleteOnlineExam = async (req, res, next) => {
  try {

    await OnlineExamQuestions.destroy({ where: { id: Number(req.params.id) } })
    res.status(200).json({
      status: 'success',
      message: 'Online exam question deleted successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.bulkDeleteQuestions = async(req,res,next)=>{
  try {
    
    let examsIds = req.body.ids 

    if(!Array.isArray(examsIds))
    return next(new AppError('Exams should be one or more than one',400))

    await OnlineExamQuestions.destroy({where:{
      id:{[Op.in]:examsIds}
    }})

      res.status(200).json({
        status:'success',
        message:'Questions deleted successfully!'
      })

  } catch (err) {
    next(err)
  }
}

exports.updateOnlineExam = async (req, res, next) => {
  try {

    await OnlineExamQuestions.update(req.body, { where: { id: Number(req.params.id) } })

    res.status(200).json({
      status: 'success',
      message: 'Online exam question updated successfully!'
    })

  } catch (err) {
    next(err)
  }
}