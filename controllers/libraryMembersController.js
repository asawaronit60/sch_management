const Class = require('../models/Class')
const LibraryMember = require('../models/LibraryMembers')
const Section = require('../models/Section')
const Staff = require('../models/Staff')
const Student = require('../models/student')
const AppError = require('../utils/AppError')

exports.addStudentMember = async (req, res, next) => {
  try {

    if (!req.body.student_id)
      return next(new AppError('Student is required!', 404))

    let isAlreadyExists = await LibraryMember.findOne({where:{student_id:req.body.student_id}})

    if(isAlreadyExists)
    return next(new AppError('Student Already Member',400))

    req.body.member_type = 'Student'
    
    await LibraryMember.create(req.body)

    res.status(200).json({
      status: 'success',
      message: 'Member added successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.addStaffMember = async (req, res, next) => {

  try {

    if (!req.body.staff_id)
      return next(new AppError('Staff is required!', 404))

    let isStaffAlreadyExists = await LibraryMember.findOne({where:{staff_id:req.body.staff_id}})

    if(isStaffAlreadyExists)
    return next(new AppError('Staff Already Exists',400))


    req.body.member_type = 'Staff'

    await LibraryMember.create(req.body)

    res.status(200).json({
      status: 'success',
      message: 'Member added successfully!'
    })

  } catch (err) {
    next(err)
  }

}

exports.deleteMembership = async (req, res, next) => {
  try {
    await LibraryMember.destroy({ where: { id: req.params.id } })

    res.status(200).json({
      status:'success',
      message:'Membership removes successfully!'
    })

  } catch (err) {
    next(err)
  }
}




exports.getLibraryStudents = async (req, res, next) => {
  try {
    let data = await LibraryMember.findAll({
      where:{
        'member_type':'Student'
      },
      include: {
        model: Student,
        attributes: ['id', 'admission_no', 'gender', 'mobileno']
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

exports.getAllClassStudents = async(req,res,next)=>{
  
    try {
      
      let students = await Student.findAll({
        attributes:['id','admission_no','firstname','father_name','dob','gender','mobileno'],
        where:{
          class_id:req.params.class_id,
          section_id:req.params.section_id
        },
        include:[
          {
            model:Class,
            attributes:['id','class']
          },
          {
            model:Section,
            attributes:['id','section']
          }
        ]
      })

      let results = []

      for(const student of students){

        let obj = {}
        obj.student_id = student.getDataValue('id')
        obj.admission_no = student.getDataValue('admission_no')
        obj.name = student.getDataValue('first_name')
        obj.father_name = student.getDataValue('father_name')
        obj.dob = student.getDataValue('dob')
        obj.gender = student.getDataValue('gender')
        obj.class = student.getDataValue('class')
        obj.section = student.getDataValue('section')
        obj.mobile = student.getDataValue('mobileno')
        let isLibraryStudent = await LibraryMember.findOne({where:{student_id:student.getDataValue('id')}})

        if(isLibraryStudent){
          obj.member_id = isLibraryStudent.getDataValue('id')
          obj.library_card_no = isLibraryStudent.getDataValue('library_card_no')

        }
        results.push(obj)

      }

   

      res.status(200).json({
        status:'success',
        data:results
      })



    } catch (err) {
      next(err)
    }


}


exports.getAllStaffs = async(req,res,next)=>{
  
  try {
    
    let staffs = await Staff.findAll({
      attributes:['id','name','email','contact_no','dob',],
    
    })

    let results = []

    for(const staff of staffs){

      let obj = {}
      obj.staff_id  = staff.getDataValue('id')
     
      obj.name = staff.getDataValue('name')
      obj.email = staff.getDataValue('email')
      obj.dob = staff.getDataValue('dob')
      obj.contact_no = staff.getDataValue('contact_no')

      let isLibraryStaff = await LibraryMember.findOne({where:{staff_id:staff.getDataValue('id'),member_type:'Staff'}})

      if(isLibraryStaff){
        obj.member_id = isLibraryStaff.getDataValue('id')
        obj.library_card_no = isLibraryStaff.getDataValue('library_card_no')

      }
      results.push(obj)

    }

 

    res.status(200).json({
      status:'success',
      data:results
    })



  } catch (err) {
    next(err)
  }


}


exports.getStudent  =async(req,res,next)=>{
  try {
    
    let data = await LibraryMember.findOne({

      where:{
        student_id:req.params.id,
        member_type:'Student'
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