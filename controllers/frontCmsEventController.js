const frontCmsEvent = require('../models/FrontCMSEvent')

exports.getAllEvent = async(req,res)=>{

  try {
    
    let data = await frontCmsEvent.findAll()

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.createEvent = async(req,res)=>{
  
  try {

    await frontCmsEvent.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Event created Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.deleteEvent = async(req,res)=>{

  try {

    await frontCmsEvent.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Event deleted Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.updateEvent = async(req,res)=>{

  try {

    await frontCmsEvent.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Event updated Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}