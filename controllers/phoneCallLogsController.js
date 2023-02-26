const PhoneCallLogs  = require('../models/PhoneCallLog')

exports.getAllPhoneCallLogs  = async(req,res,next)=>{
  try {

    let data = PhoneCallLogs.findAll()

    if(req.query.fields){
      data = PhoneCallLogs.findAll({attributes:req.query.fields.split(',')})
    }

    let phoneCallLogs = await data

    res.status(200).json({
      status:'success',
      data:phoneCallLogs
    })

  } catch (err) {
    next(err)
  }
}

exports.createPhoneCallLogs  = async(req,res,next)=>{
  try {
    
    await PhoneCallLogs.create(req.body)
    res.status(200).json({
      status:'success',
      message:'Phone call logs created successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.updatePhoneCallLogs = async(req,res,next)=>{
  try {
    
    await PhoneCallLogs.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'call Logs updated successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.deletePhoneCallLogs = async(req,res,next)=>{
  try {
    
    await PhoneCallLogs.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Call log deleted successfully!'
    })
  } catch (err) {
    next(err)
  }
}