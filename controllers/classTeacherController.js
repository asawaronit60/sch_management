const classTeacher = require('../models/ClassTeachers')
const classSection = require('../models/ClassSections')
const Staff = require('../models/Staff')
const Class = require('../models/Class')
const Section = require('../models/Section')
const AppError = require('../utils/appError')
// const appError = require('../utils/appError')


exports.getClassTeacher = async (req, res, next) => {

  try {

    let results = []

    let class_section_id = await classTeacher.findAll({
      include: {
        model: classSection,
        attributes: ['id'],
        include: [
          {
            model: Class,
            attributes: ['id', 'class']
          },
          {
            model: Section,
            attributes: ['id', 'section']
          }
        ]
      },
      group: ['class_section_id']
    })

    for (const id of class_section_id) {

      let obj = {}
      console.log('iddd', Object.keys(id.class_section))
      let teachers = []

      let data = await classTeacher.findAll({
        where: {
          class_section_id: id.getDataValue('class_section_id')
        },
        include: {
          model: Staff,
          attributes: ['id', 'name']
        }
      })

      if (id.getDataValue('class_section').class !== null) {
        obj.class_id = id.getDataValue('class_section').class.id
        obj.class = id.getDataValue('class_section').class.class
      }
      if (id.getDataValue('class_section').section !== null) {
        obj.section_id = id.getDataValue('class_section').section.id
        obj.section = id.getDataValue('class_section').section.section
      }

      data.forEach(cls_teachers => {
        teachers.push({ id: cls_teachers.getDataValue('staff').id, teacher: cls_teachers.getDataValue('staff').name })
      })

      obj.class_teachers = teachers

      results.push(obj)

    }



    res.status(200).json({
      status: 'success',
      data: results
    })

  } catch (err) {
    next(err)
  }


}



exports.createClassTeacher = async (req, res, next) => {

  try {

    let teachers_id = req.body.teachers_id


    let classSectionId = await classSection.findOne({
      where: {
        class_id: req.body.class_id,
        section_id: req.body.section_id
      }
    })

    if (!classSectionId)
      return res.status(404).json({
        status: 'fail',
        message: 'No such class section found!'
      })

    for (const id of teachers_id) {

      let teacherAlreadyExist = await classTeacher.findOne({
        where: {
          class_section_id: classSectionId.getDataValue('id'),
          staff_id: id
        }
      })

      if (teacherAlreadyExist) {

        return res.status(400).json({
          status: 'fail',
          message: 'Class teacher Already Exists!!'
        })
      }

    }



    for (const id of teachers_id) {

      await classTeacher.create({
        class_section_id: classSectionId.getDataValue('id'),
        staff_id: id
      })

    }

    res.status(200).json({
      status: 'success',
      message: 'Class teacher added successfully!',
    })


  } catch (err) {
    next(err)
  }


}

exports.deleteClassTeacher = async (req, res, next) => {
  try {

    if (!req.body.class_id)
      return next(new AppError("class is required", 404))
    if (!req.body.section_id)
      return next(new AppError("section is required", 404))
    if (!req.body.teachers_id)
      return next(new AppError("teachers is required", 404))


    let class_section = await classSection.findOne({
      where: {
        class_id: req.body.class_id,
        section_id: req.body.section_id
      }
    })

    if (!class_section)
      return res.status(404).json({
        status: 'fail',
        message: 'Class section not found!'
      })


    for (const id of req.body.teachers_id) {
      await classTeacher.destroy({
        where: {
          class_section_id: class_section.getDataValue('id'),
          staff_id: id
        }
      })
    }

    res.status(200).json({
      status: 'success',
      message: 'class teacher deleted successfully!'
    })

  } catch (err) {
    next(err)
  }
}