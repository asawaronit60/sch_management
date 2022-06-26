const StaffLeaveRequest = require('../models/StaffLeaveRequest')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')

exports.getAllLeaveRequest = async(req,res)=>{

  try {
    
    let data = await sequelize.query(`
      select st.name , lt.type , lr.leave_from , lr.leave_days , lr.date , ,lr.status from 
      staffs as st , leave_types as lt , leave_requests as lr ;
     `)

    req.status(200).json({
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

exports.createLeaveRequest = api.create(StaffLeaveRequest)
exports.deleteLeaveRequest = api.delete(StaffLeaveRequest)
exports.updateLeaveRequest = api.update(StaffLeaveRequest)