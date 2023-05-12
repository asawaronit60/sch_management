const StaffAttendance = require('../models/StaffAttendance')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')
const Staff = require('../models/Staff')
const UserRole = require('../models/UserRoles')
const staffLeaveDetails = require('../models/StaffLeaveDetails')
const AppError = require('../utils/AppError')
const { Op } = require('sequelize')

exports.getAllStaffAttendanceList = async(req,res)=>{

  try {
    
    let staffs = await Staff.findAll({
      attributes:['id','staff_id','name'],
      where:{
        role_id:req.params.role_id
      },
      include:{
        model:UserRole,
        attributes:['id','name']
      }
    })

    let results = []

    for(const staff of staffs){

      let obj = {}
      obj.id = staff.getDataValue('id')
      obj.staff_id = staff.getDataValue('staff_id')
      obj.name = staff.getDataValue('name')
      obj.role = staff.getDataValue('user_role') 
      obj.attendence = null
      obj.note = null

      let attendence = await StaffAttendance.findOne({
        where:{
        staff_id:staff.getDataValue('id'),
        date:req.query.date
        }
      })
      console.log(attendence)
      if(attendence){
        obj.attendence = attendence.getDataValue('attendence')
        obj.note = attendence.getDataValue('note')
      }

      results.push(obj)

    }

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

exports.createStaffAttendance = async(req,res,next)=>{

  try {
    
    if(!req.body.date)
    return next(new AppError('Date is required!',400))

    for(const attendence of req.body.attendences){

      let alreadyExists = await StaffAttendance.findOne({
        where:{
          staff_id:attendence.id,
          date:req.body.date
        }
      })
      if(!alreadyExists)
      await StaffAttendance.create({
          staff_id:attendence.id,
          attendence:attendence.attendence,
          date:req.body.date,
          note:attendence.note || null
      })


      else {
        await StaffAttendance.update({attendence:attendence.attendence,note:attendence.note},{where:{
          staff_id:attendence.id,
          date:req.body.date
        }})
      }

    }

    res.status(200).json({
      status:'success',
      message:'Attendence added!'
    })

  } catch (err) {
    next(err)
  }


}

exports.getStaffMonthlyAttendance = async(req,res,next)=>{

  try {
    
    let month = req.body.month

    let data = await StaffAttendance.findAll({
      attributes:['id','staff_id','attendence',[sequelize.fn('count',sequelize.col('attendence')),'frequnecy']],
      where:{
       [Op.and]: [sequelize.where(sequelize.fn("month", sequelize.col("date")), month) ],
       staff_id:req.body.staff_id
      },
      group:['attendence']
    })


    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }


}

exports.deleteStaffAttendance = api.delete(StaffAttendance)
exports.updateStaffAttendance = api.update(StaffAttendance)