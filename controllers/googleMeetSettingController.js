const GoogleMeetSetting = require('../models/GoogleMeetSettings')

exports.getSettings = async(req,res,next)=>{
  try {
    
    let data = await GoogleMeetSetting.findAll()

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.createSettings = async(req,res,next)=>{
  try {
    
    await GoogleMeetSetting.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Setting created successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.updateSetttings = async(req,res,next)=>{
  try {
    
    await GoogleMeetSetting.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Setting updated successfully!'
    })

  } catch (err) {
    next(err)
  }
}