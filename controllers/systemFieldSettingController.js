const {studentSystemFields, staffSystemFields} = require('../models/SystemFieldsSettings')

const getData = (Model) => async(req,res,next)=>{

  try {
    let data = await Model.findByPk(1)
    res.status(200).json({
      status:'success',
      data
    })
  } catch (err) {
    next(err)
  }

}

const updateData = (Model) => async(req,res,next)=>{

  try {
   await Model.update(req.body,{where:{id:1}})
    res.status(200).json({
      status:'success',
      message:'Updated!'
    })
  } catch (err) {
    next(err)
  }

}

exports.getStudentFields = getData(studentSystemFields)
exports.updateStudentFields = updateData(studentSystemFields)

exports.getStaffFields = getData(staffSystemFields)
exports.updateStaffFields = updateData(staffSystemFields)