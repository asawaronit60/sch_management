const LibraryMember = require('../models/LibraryMembers')
const Student = require('../models/student')
const AppError = require('../utils/AppError')

exports.addStudentMember = async (req, res, next) => {
  try {

    if (!req.body.student_id)
      return next(new AppError('Student is required!', 404))

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
  } catch (err) {
    next(err)
  }
}

exports.getStudent = async (req, res, next) => {
  try {
    let data = await LibraryMember.findOne({
      where: {
        student_id: req.params.student_id
      },
      include: {
        model: Student,
        attributes: ['id', 'admission_no', 'gender', 'mobileno']
      }
    })
  } catch (err) {
    next(err)
  }
}