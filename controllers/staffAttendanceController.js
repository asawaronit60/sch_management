const StaffAttendance = require('../models/StaffAttendance')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')

exports.getAllStaffAttendance = async(req,res)=>{

  try {
    
    let [results] = await sequelize.query(`
    select sa.date, sa.remark,sa.is_active ,s.name,sat.type from staff_attendances as sa, 
      staffs as s , staff_attendance_types as sat 
      where sa.staff_id = s.id and
      sa.staff_attendance_type_id = sat.id
    `)

    res.status(200).json({
      status:'success',
      data:results
    })

  } catch (err) {
      res.status(400).json({
        status:'fail',
        message:err.message
      })
  }

}

exports.createStaffAttendance = api.create(StaffAttendance)
exports.deleteStaffAttendance = api.delete(StaffAttendance)
exports.updateStaffAttendance = api.update(StaffAttendance)