const Staff = require('../models/Staff')
const api = require('../utils/apiFactory')
const Role = require('../models/UserRoles')

exports.getAllStaff = api.getAll(Staff)
exports.createStaff = api.create(Staff)
exports.deleteStaff = api.delete(Staff)
exports.updateStaff = api.update(Staff)

exports.getAllTeachers = async(req,res)=>{

  try {
    
    let role_id = await Role.findOne({
      where:{
        name:'Teacher' || 'teacher'
      }
    })

    let data = await Staff.findAll({
      attributes:['id','name'],
      where:{
      role_id:role_id.getDataValue('id')
    }
  })

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