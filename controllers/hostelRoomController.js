const hostel = require('../models/Hostel')
const HostelRoom = require('../models/HostelRoom')
const roomType = require('../models/HostelRoomType')
const AppError = require('../utils/AppError')

exports.getAllHostelRoom = async (req, res, next) => {
  try {
    let data = await HostelRoom.findAll({
      include:[
        {
          model:hostel,
          attributes:['id','name']
        },
        {
          model:roomType,
          attributes:['id','type']
        }
      ]
    })

    res.status(200).json({
      status: 'success',
      data
    })
  } catch (err) {
    next(err)
  }
}

exports.createHostelRoom = async (req, res, next) => {
  try {

    if (!req.body.hostel_id)
      return next(new AppError('hostel is required', 404))

    if (!req.body.room_type_id)
      return next(new AppError('room type is required', 404))


    await HostelRoom.create(req.body)

    res.status(200).json({
      status: 'success',
      message: 'Hostel created successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.deleteHostelRoom = async (req, res, next) => {
  try {
    await HostelRoom.destroy({ where: { id: req.params.id } })

    res.status(200).json({
      status: 'success',
      message: 'Hostel Room deleted successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.updateHostelRoom = async (req, res, next) => {
  try {
    await HostelRoom.update(req.body, { where: { id: req.params.id } })

    res.status(200).json({
      status: 'success',
      message: 'Hostel Room updated successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.getRoom = async(req,res,next)=>{

  try {

    let data = await HostelRoom.findAll({
      attributes:['id','room_number_name',],
      where:{
        hostel_id:req.params.hostel_id
      },
      include:{
        model:roomType,
        attributes:['id','type']
      }
    })

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }

}