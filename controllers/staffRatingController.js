const StaffRating =require('../models/StaffRating')
//const staff = require('../models/Staff')
const Api = require('../utils/apiFactory')

exports.getAllStaffRating = async(req,res)=>{

  try {
    
    let data = await StaffRating.findAll({include:'staff'})

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

exports.createStaffRating = Api.create(StaffRating)
exports.deleteStaffRating = Api.delete(StaffRating)
exports.updateStaffRating = Api.update(StaffRating)
