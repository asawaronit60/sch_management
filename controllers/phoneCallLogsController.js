const PhoneCallLogs  = require('../models/PhoneCallLog')

exports.getAllPhoneCallLogs  = async(req,res)=>{
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
    res.status(400).json({
      status:'success',
      message:err.messsage
    })
  }
}

exports.createPhoneCallLogs  = async(req,res)=>{
  try {
    
    await PhoneCallLogs.create(req.body)
    res.status(200).json({
      status:'success',
      message:'Phone call logs created successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'success',
      message:err.messsage
    })
  }
}

exports.updatePhoneCallLogs = async(req,res)=>{
  try {
    
    await PhoneCallLogs.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'call Logs updated successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'success',
      message:err.messsage
    })
  }
}

exports.deletePhoneCallLogs = async(req,res)=>{
  try {
    
    await PhoneCallLogs.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Call log deleted successfully!'
    })
  } catch (err) {
    res.status(400).json({
      status:'success',
      message:err.messsage
    })
  }
}