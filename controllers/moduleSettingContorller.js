const moduleSetting = require('../models/ModulesSettings')


exports.getSetting = async(req,res,next)=>{
  
  try {

    let data = await moduleSetting.findByPk(1)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }


}

exports.updateSetting = async(req,res,next)=>{
  
  try {

     await moduleSetting.update(req.body,{where:{id:1}})

    res.status(200).json({
      status:'success',
      message:'updated!'
    })

  } catch (err) {
    next(err)
  }


}