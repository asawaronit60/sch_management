const Payroll = require('../models/StaffPayroll')
const api = require('../utils/apiFactory')
const Staff = require('../models/Staff')
const AppError = require('../utils/AppError')
const Department = require('../models/Department')
const UserRole = require('../models/UserRoles')
const StaffDesignation = require('../models/StaffDesignation')


exports.getStaffLists = async(req,res,next)=>{
  try {

    let whereObj = {}
    if(req.body.role_id)
      whereObj.role_id = req.body.role_id

    let payrollObj = {
      month:'April',
      year:'2023'
    }
    console.log(payrollObj)

    if(req.body.month)
      payrollObj.month = req.body.month

      if(req.body.year)
      payrollObj.year = req.body.year

    let staffs = await Staff.findAll({
      attributes:['id','staff_id','name','contact_no'],
      where:whereObj,
      include:[
        {model:Department},
        {model:UserRole},
        {model:StaffDesignation}
      ]
    })

    let results = []

    for(const staff of staffs){

      let obj = {}
      obj.id = staff.getDataValue('id')
      obj.staff_id = staff.getDataValue('staff_id')
      obj.name = staff.getDataValue('name')
      obj.contact_no = staff.getDataValue('contact_no')
      obj.department = staff.getDataValue('department').department_name
      obj.role = staff.getDataValue('user_role').name
      obj.designation = staff.getDataValue('staff_designation').designation
      obj.status = 'Not Generated'

      payrollObj.staff_id = staff.getDataValue('id')

      let isGenerated = await Payroll.findOne({
        where:payrollObj
      })

      if(isGenerated)
      obj.status = isGenerated.getDataValue('status')

      results.push(obj)


    }

    res.status(200).json({
      status:'success',
      data:results,
    })

  } catch (err) {
    next(err)
  }
}


exports.getBasicSalary= async(req,res,next)=>{
  try {
    
    let sal = await Staff.findByPk(req.params.id,{attributes:['basic_salary']})

    res.status(200).json({
      status:'success',
      data:sal.getDataValue('basic_salary')
    })

  } catch (err) {
    next(err)
  }
}

exports.getAllPayroll = api.getAll(Payroll)


exports.createPayroll = async(req,res,next)=>{

  try {
    
    if(req.body.earnings)
      req.body.earnings = JSON.stringify(req.body.earnings)

      if(req.body.deductions)
      req.body.deductions = JSON.stringify(req.body.deductions)

    if(!req.body.staff_id){
      return next(new AppError('Staff is required',400))
    }

    req.body.status = 'Generated'

    let alreadyExists = await Payroll.findOne({
      where:{
        staff_id:req.body.staff_id,
        month:req.body.month
      }
    })


    if(alreadyExists)
    return next(new AppError('Already Generated!',400))

     await Payroll.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Payroll added successfully!',
      alreadyExists
    })

  } catch (err) {
    next(err)
  }

}


exports.payment = async(req,res,next)=>{
  try {

    if(!req.body.payment_mode)
    return next(new AppError('Payment mode is required',400))

    req.body.status = 'Paid'

    await Payroll.update(req.body,{
      where:{
        id:req.params.id
      }
    })

    res.status(200).json({
      status:'success',
      message:'Payment done successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.deletePayroll = api.delete(Payroll)
