const Class = require('../models/Class')
const Section = require('../models/Section')
const Subject = require('../models/Subject')
const subjectGroup = require('../models/SubjectGroup')
const subjectGroupSection = require('../models/SubjectGroupSection')
const subjectGroupSubjects = require('../models/SubjectGroupSubjects')
const classSection = require('../models/ClassSections')
const AppError = require('../utils/AppError')

exports.getSubjectGroups = async (req, res, next) => {

  try {

    let results = []

    let subjectGroups = await subjectGroup.findAll({
      attributes: ['id', 'name'],
      include: {
        model: Class,
        attributes: ['id', 'class']
      }
    })


    for (const grp of subjectGroups) {

      let obj = {}

      let sections = []
      let subjects = []

      obj.id = grp.getDataValue('id')
      obj.name = grp.getDataValue('name')

      let sections_data = await subjectGroupSection.findAll({
        include: {
          model: Section,
          attributes: ['id', 'section']
        },
        where: {
          subject_group_id: grp.getDataValue('id')
        }
      })


      sections_data.forEach(sec => sections.push(
        {
          class_id: grp.getDataValue('class').id,
          section_id: sec.getDataValue('section').id,
          class: `${grp.getDataValue('class').class}-${sec.section.section}`
        })
      )

      let subjects_data = await subjectGroupSubjects.findAll({
        include: {
          model: Subject,
          attributes: ['id', 'name']
        },
        where: {
          subject_group_id: grp.getDataValue('id')
        }
      })

      subjects_data.forEach(sub => subjects.push({
        id: sub.subject.id,
        subject: sub.subject.name
      }))


      obj.class_Sections = sections
      obj.class_subject = subjects

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

exports.createSubjectGroup = async (req, res, next) => {

  try {

    let { sections, subjects, ...rem } = req.body

    let newSubjectGroup = await subjectGroup.create(rem)

    for (const section of sections) {

      let obj = {}
      obj.subject_group_id = newSubjectGroup.getDataValue('id')
      obj.section_id = section

      await subjectGroupSection.create(obj)

    }

    for (const subject of subjects) {

      let obj = {}
      obj.subject_group_id = newSubjectGroup.getDataValue('id')

      obj.subject_id = subject

      await subjectGroupSubjects.create(obj)

    }

    res.status(200).json({
      status: 'success',
      message: 'Subject group created Successfully!'
    })

  } catch (err) {
    next(err)
  }


}

exports.updateSubjectGroup = async (req, res, next) => {
  try {


    let { subjects, sections, ...rem } = req.body

    if (subjects) {

      await subjectGroupSubjects.destroy({
        where: { subject_group_id: req.params.id }
      })

      for (const id of subjects) {
        await subjectGroupSubjects.create({
          subject_group_id: req.params.id,
          subject_id: id
        })

      }
    }


    if (sections) {

      await subjectGroupSection.destroy({
        where: { subject_group_id: req.params.id }
      })

      for (const id of sections) {
        await subjectGroupSection.create({
          subject_group_id: req.params.id,
          section_id: id
        })

      }
    }

      await subjectGroup.update(rem, {
      where: {
        id: req.params.id
      }
    })
    

    res.status(200).json({
      status:'success',
      message:'Data updated successfuly!'
    })

  } catch (err) {
    next(err)
  }
}

exports.getSubjectGroup = async (req, res,next) => {

  try {

    let class_id = req.params.class_id
    let section_id = req.params.section_id

    let sub_group_id = await subjectGroup.findOne({
      attributes: ['id'],
      where: {
        class_id
      }
    })

    if(!sub_group_id)
    return next(new AppError('No subject groups found!',404))

    let final_sub_group_id = await subjectGroupSection.findAll({
      attributes: ['subject_group_id'],
      where: {
        section_id,
        subject_group_id: sub_group_id.getDataValue('id')
      },
      include: {
        model: subjectGroup,
        attributes: ['name']
      }
    })


    res.status(200).json({
      status: 'success',
      data: final_sub_group_id
    })


  } catch (err) {
    next(err)
  }

}


exports.deleteSubjectGroup = async (req, res,next) => {


  try {
    let subGrpId = req.params.id

    await subjectGroup.destroy({ where: { id: subGrpId } })

    res.status(200).json({
      status: 'success',
      message: 'Subject group deleted successfully!'
    })

  } catch (err) {
    next(err)
  }

}

exports.getSubjectGroupSubjects = async (req, res,next) => {

  try {

    let subjects = await subjectGroupSubjects.findAll({
      attributes: ['id', 'subject_id'],
      where: {
        subject_group_id: req.params.subject_group_id
      },
      include: {
        model: Subject,
        attributes: ['id', 'name']
      }
    })

    res.status(200).json({
      stauts: 'success',
      data: subjects
    })

  } catch (err) {
    next(err)
  }

}