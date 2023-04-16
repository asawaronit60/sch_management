const Hostel = require('../models/Hostel')

exports.getAllHostel = async(req,res,next)=>{
  try {
    let data = await Hostel.findAll()

    res.status(200).json({
      status:'success',
      data
    })
  } catch (err) {
    next(err)
  }
}

exports.createHostel = async(req,res,next)=>{
  try {
     await Hostel.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Hostel created successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.deleteHostel = async(req,res,next)=>{
  try {
     await Hostel.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Hostel deleted successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.updateHostel = async(req,res,next)=>{
  try {
     await Hostel.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Hostel updated successfully!'
    })
  } catch (err) {
    next(err)
  }
}