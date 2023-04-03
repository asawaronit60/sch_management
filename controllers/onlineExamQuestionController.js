const OnlineExamQuestions = require('../models/OnlineExamOuestions')
const Staff = require('../models/Staff')
const Subject = require('../models/Subject')

exports.getAllExams = async (req, res, next) => {
  try {

    let data = await OnlineExamQuestions.findAll({
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

exports.createExam = async (req, res, next) => {
  try {

    if (!req.user) {
      let staff = await Staff.findAll({ limit: 1 })
      req.body.created_by_id = staff[0].getDataValue('id')
    }

    await OnlineExamQuestions.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Online exam question created successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.deleteOnlineExam = async(req,res,next)=>{
  try {
    
    await OnlineExamQuestions.destroy({where:{id:Number(req.params.id)}})
    res.status(200).json({
      status:'success',
      message:'Online exam question deleted successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.updateOnlineExam = async(req,res,next)=>{
  try {
    
    await OnlineExamQuestions.update(req.body,{where:{id:Number(req.params.id)}})

    res.status(200).json({
      status:'success',
      message:'Online exam question updated successfully!'
    })

  } catch (err) {
    next(err)
  }
}