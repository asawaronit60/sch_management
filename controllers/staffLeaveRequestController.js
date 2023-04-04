const StaffLeaveRequest = require('../models/StaffLeaveRequest')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')

exports.getAllLeaveRequest = async(req,res,next)=>{

  try {
    
    let [results] = await sequelize.query(`
      select st.name , lt.type , lr.leave_from , lr.leave_days , lr.date ,lr.status from 
      staffs as st , leave_types as lt , staff_leave_requests as lr ;
     `)

    res.status(200).json({
      status:'success',
      data:results
    })

  } catch (err) {
      next(err)
  }

}

exports.createLeaveRequest = api.create(StaffLeaveRequest)
exports.deleteLeaveRequest = api.delete(StaffLeaveRequest)
exports.updateLeaveRequest = api.update(StaffLeaveRequest)