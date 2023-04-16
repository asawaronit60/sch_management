const RoomType = require('../models/HostelRoomType')

exports.getAllRoom = async(req,res,next)=>{
  try {
    let data = await RoomType.findAll()

    res.status(200).json({
      status:'success',
      data
    })
  } catch (err) {
    next(err)
  }
}

exports.createRoom = async(req,res,next)=>{
  try {
     await RoomType.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Room type added successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.deleteRoom = async(req,res,next)=>{
  try {
     await RoomType.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Room type deleted successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.updateRoom = async(req,res,next)=>{
  try {
     await RoomType.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Room type updated successfully!'
    })
  } catch (err) {
    next(err)
  }
}