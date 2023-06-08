const AttendenceType = require('../models/AttendenceType')
const Student = require('../models/student')
const StudentAttendence = require('../models/StudentAttendence')
const multer = require('multer')
const ApproveLeave = require('../models/StudentApproveLeave')
const Staff = require('../models/Staff')
const Class = require('../models/Class')
const Section = require('../models/Section')
const appError = require('../utils/appError')
const sequelize = require('sequelize')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/approveLeave')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.mimetype.split('/')[1])
  }
})

const upload = multer({ storage }).single('document')

exports.getFile = async (req, res, next) => {
  try {

    let file_name = await ApproveLeave.findByPk(req.params.id, {
      attributes: ['id', 'document']
    })

    res.download(`${__dirname}../${file_name.getDataValue('document')}`)


  } catch (err) {
    next(err)
  }
}

exports.getAllLeave = async (req, res, next) => {
  try {

    let data = await ApproveLeave.findAll({
      where: {
        class_id: req.params.class_id,
        section_id: req.params.section_id
      },
      include: [
        {
          model: Class,
          attributes: ['class']
        },
        {
          model: Section,
          attributes: ['section']
        },
        {
          model:Student,
          attributes:['id','fullname']
        },
        {
          model: Staff,
          attributes: ['name']
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

exports.addLeave = async (req, res, next) => {
  try {

    upload(req, res, async (err) => {

      if (err)
        return next(new appError('error uploading file', 500))

      if (!req.user) {
        let staff = await Staff.findAll({ limit: 1 })
        req.body.approved_by_id = staff[0].getDataValue('id')
      }

      if (!req.body.class_id)
        return next(new appError('class is required', 400))

      if (!req.body.section_id)
        return next(new appError('Section is required', 400))

      if (!req.body.student_id)
        return next(new appError('Student is required', 400))


      if (req.file)
        req.body.document = `/public/approveLeave/${req.file.filename}` 

      await ApproveLeave.create(req.body)

      res.status(200).json({
        status: 'success',
        message: 'Leave added successfully!'
      })

    })



  } catch (err) {
    next(err)
  }
}

exports.deleteLeave = async (req, res, next) => {
  try {
    await ApproveLeave.destroy({
      where: {
        id: req.params.id
      }
    })


    res.status(200).json({
      status:'success',
      message:'Deleted!'
    })


  } catch (err) {
    next(err)
  }
}

exports.updateLeave = async (req, res, next) => {
  try {

    upload(req, res, async (err) => {

    if (req.body.leave_status)
      if (req.body.leave_status === 'Approve') {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = yyyy + '/' + mm + '/' + dd;
        
        console.log(formattedToday)

        req.body.approved_date = formattedToday
    }
    else req.body.approved_date = null

    if (req.file)
    req.body.document = `/public/approveLeave/${req.file.filename}` 

    await ApproveLeave.update(req.body,{
      where:{
        id:req.params.id
      }
    })

    res.status(200).json({
      status:'success',
      message:'Updated!'
    })

  })

  } catch (err) {
    next(err)
  }
}


exports.getAllStudentAttendence = async (req, res, next) => {
  try {

    let students = await Student.findAll({
      attributes: [['id', 'student_id'], 'firstname', 'admission_no'],
      where: {
        class_id: req.params.class_id,
        section_id: req.params.section_id
      }
    })

    let results = []

    for (const student of students) {

      let obj = {}
      obj.student_id = student.getDataValue('student_id')
      obj.firstname = student.getDataValue('firstname')
      obj.admission_no = student.getDataValue('admission_no')

      let data = await StudentAttendence.findOne({
        where: {
          student_id: student.getDataValue('student_id'),
          date: req.query.date
        }

      })

      if (data) {
        obj.attendence = data.getDataValue('attendence')
        obj.note = data.getDataValue('note')
      }
      else {
        obj.attendence = 'Present'
        obj.note = null
      }

      results.push(obj)

    }

    // let data = await Student.findAll({
    //   attributes:[['id','student_id'],'firstname','admission_no'],
    //   include:[{
    //     model:StudentAttendence,
    //     // attributes:[['id','student_id'],'firstname','admission_no'],
    //     // where:{
    //     //   class_id:req.body.class_id,
    //     //   section_id:req.body.section_id
    //     // },
    //     required:false,
    //     // paranoid:false, 
    //   }],
    //   where:{
    //     class_id:req.body.class_id,
    //     section_id:req.body.section_id
    //   },
    // })



    res.status(200).json({
      status: "success",
      data: results
    })


  } catch (err) {
    next(err)
  }
}

exports.createStudentAttendence = async (req, res, next) => {
  try {

    if (!Array.isArray(req.body.attendences))
      return next(new appError('Data must be a list'))

    for (const attendence of req.body.attendences) {

      let alreadyExists = await StudentAttendence.findOne({ where: { student_id: attendence.student_id } })

      if (!alreadyExists)
        await StudentAttendence.create({
          student_id: attendence.student_id,
          attendence: attendence.attendence,
          note: attendence.note,
          date: attendence.date
        })

      else {
        await StudentAttendence.update({ attendence: attendence.attendence, note: attendence.note }, {
          where: {
            student_id: attendence.student_id
          }
        })
      }

    }


    res.status(200).json({
      status: 'success',
      message: 'Attendence added successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.deleteStudentAttendence = async (req, res, next) => {
  try {
    await StudentAttendence.destroy({ where: { id: req.params.id } })
    res.status(200).json({
      status: 'success',
      message: 'Studence attendence deleted successfully'
    })
  } catch (err) {
    next(err)
  }
}

exports.updateStudentAttendence = async (req, res, next) => {
  try {

    await StudentAttendence.update(req.body, { where: { id: req.parms.id } })
    res.status(200).json({
      status: 'success',
      message: 'Student Attendence updated successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.getStudentAttendenceByDate = async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}