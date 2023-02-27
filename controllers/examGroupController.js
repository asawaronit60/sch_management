const examGroup = require('../models/ExamGroup')
const examType = require('../models/ExamType')

exports.getAllExamGroups = async (req, res, next) => {

  try {

    let data = await examGroup.findAll({
      include:{
        model:examType
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