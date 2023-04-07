const Student = require('../models/student')
const { Op } = require('sequelize')
const multer = require('multer')
const Class = require('../models/Class')
const Section = require('../models/Section')
const AppError = require('../utils/AppError')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/studentDetails`)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }

})

const upload = multer({ storage }).fields([{
  name: 'image',
  maxCount: 1
}, {
  name: 'father_pic',
  maxCount: 1
}, {
  name: 'mother_pic',
  maxCount: 1
}, {
  name: 'guardian_pic',
  maxCount: 1
}])

exports.getAllStudent = async (req, res, next) => {
  try {

    let data = await Student.findAll({
      include: [
        {
          model: Class,
          attributes: ['class']
        },
        {
          model: Section,
          attributes: ['section']
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

exports.getStudent = async (req, res) => {

  try {

    let student = await Student.findAll({
      where: {
        program_id: req.body.program,
        name: {
          [Op.like]: req.body.search,
        },
        roll_no: req.body.search,
        admission_no: req.body.search
      }//where

    })

    res.status(200).json({
      status: 'success',
      data: student
    })


  } catch (err) {
    res.status(400).json({
      status: 'success',
      message: err.message
    })
  }

}

exports.createStudent = async (req, res, next) => {
  try {

    upload(req, res, async (err) => {

      if (err)
        return res.status(400).json({
          status: 'fail',
          message: err.message
        })

      if (req.files.image) {
        req.body.image = `public/studentDetails/${req.files.image[0].originalname}` 
      }

      if (req.files.father_pic) {
        req.body.father_pic = `public/studentDetails/${req.files.father_pic[0].originalname}` 
      }

      if (req.files.mother_pic) {
        req.body.mother_pic =`public/studentDetails/${req.files.mother_pic[0].originalname}` 
      }

      if (req.files.gaurdian_pic) {
        req.body.gaurdian_pic = `public/studentDetails/${req.files.gaurdian_pic[0].originalname}` 
      }

      // console.log( `public/studentDetails/${req.files.father_pic[0].originalname}` )      

      if(Array.isArray(req.body.permanent_address))
        req.body.permanent_address = req.body.permanent_address[0]


        if(Array.isArray(req.body.current_address))
        req.body.permanent_address = req.body.current_address[0]

      await Student.create(req.body)
        

      res.status(200).json({
        status: 'success',
        message: 'student added successfully!',
      })

    })


  } catch (err) {
    next(err)
  }
}

exports.updateStudent = async (req, res, next) => {


  upload(req, res, async (err) => {
    try {

      if (err)
        return next(new AppError('error uploading image please try again'), 500)


      if (req.files.image) {
        req.body.image = req.files.image[0].path
      }

      if (req.files.father_pic) {
        req.body.father_pic = req.files.father_pic[0].path
      }

      if (req.files.mother_pic) {
        req.body.mother_pic = req.files.mother_pic[0].path
      }

      if (req.files.gaurdian_pic) {
        req.body.gaurdian_pic = req.files.gaurdian_pic[0].path
      }

      await Student.update(req.body, { where: { id: req.params.id } })

      res.status(200).json({
        status: 'success',
        message: 'student updated successfully!'
      })

    } catch (err) {
      next(err)
    }


  })

}

exports.deleteStudent = async (req, res, next) => {
  try {

    await Student.destroy({ where: { id: req.params.id } })

    res.status(200).json({
      status: 'success',
      message: 'student deleted successfully!'
    })
  } catch (err) {
    next(err)
  }
}

exports.bulkDelete = async (req, res, next) => {
  try {

    await Student.destroy({
      where: {
        program_id: req.body.program,
        id: req.query.id.split(',')
      }

    })

    res.status(200).json({
      status: 'success',
      message: 'Records Deleted Successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.disabledStudents = async (req, res, next) => {
  try {

    let data = await Student.findAll({
      where: {
        program_id: req.body.program,
        dis_reason: { [Op.not]: null }
      }//where  
    })

    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }
}