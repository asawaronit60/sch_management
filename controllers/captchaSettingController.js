const captchaSetting = require('../models/CaptchaSettings')

exports.getSettings =  async(req,res,next)=>{

  try {
    
    let data = await captchaSetting.findByPk(1)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }

}

exports.updateSettings = async(req,res,next)=>{

  try {
    
     await captchaSetting.update(req.body,{where:{id:1}})

    res.status(200).json({
      status:'success',
      message:'updated!'
    })

  } catch (err) {
    next(err)
  }

}
