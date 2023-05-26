const studentProfileUpdateSetting = require('../models/StudentProfileUpdateSetting')

exports.getStudentProfileSetting = async(req,res,next)=>{

  try {
    
    let data = await studentProfileUpdateSetting.findByPk(1)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }

}

exports.updateStudentProfileSetting = async(req,res,next)=>{

  try {
  
    await studentProfileUpdateSetting.update(req.body,{where:{id:1}})

    res.status(200).json({
      status:'success',
      message:'updated!'
    })

  } catch (err) {
    next(err)
  }

}