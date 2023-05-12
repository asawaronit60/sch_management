
const Lesson = require('../models/Lesson')
const LessonName = require('../models/LessonName')
const classSection = require('../models/ClassSections')
const subject = require('../models/Subject')
const subjectGroup = require('../models/SubjectGroup')
const Class = require('../models/Class')
const Section = require('../models/Section')

exports.getAllLessons = async(req,res,next)=>{

    try {
      
     let lessonIds = await Lesson.findAll({
      // attributes:['id'],
      include:[{
        model:classSection,
        include:[{
          model:Class,
          attributes:['class']
          },
          {
            model:Section,
            attributes:['section']
          }
      ]
      },{
        model:subjectGroup,
        attributes:['name']
      }
      ,{
        model:subject,
        attributes:['name']
      }]
     })

     let results = []
 
    for(const lessonId of lessonIds){

      let obj = {}
      obj.id = lessonId.getDataValue('id')
      obj.class = lessonId.getDataValue('class_section').class.class
      obj.section = lessonId.getDataValue('class_section').section.section
      obj.subject_group = lessonId.getDataValue('subject_group')
      obj.subject = lessonId.getDataValue('subject').name
   

      let lessons = []

      let data = await LessonName.findAll({
        attributes:['id','lesson_name'],
        where:{
          lesson_id:lessonId.getDataValue('id')
        }
      })

      data.forEach(el=>lessons.push(el.getDataValue('lesson_name')))

      obj.name = lessons

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


exports.createLesson = async(req,res,next)=>{

  try {

    let {lesson_name} = req.body


    const class_section  = await classSection.findOne({
      attributes:['id'],
      where:{
        class_id:req.body.class_id,
        section_id:req.body.section_id
      }
    })

    if(!class_section){
      return res.status(400).json({
        status:'fail',
        message:'No such class or section '
      })
    }
    
    req.body.class_section_id = class_section.getDataValue('id')

    let lesson = await Lesson.create({
      class_section_id:class_section.getDataValue('id'),
      subject_id:req.body.subject_id,
      subject_group_id:req.body.subject_group_id
    })

    for (const name of lesson_name){

      await LessonName.create({
        lesson_name:name,
        lesson_id:lesson.getDataValue('id')
      })

    }
   


    res.status(200).json({
      status:'success',
      message:'Lesson added successfully!'
    })



  } catch (err) {
   next(err)
  }

}

exports.delelteLesson = async(req,res,next)=>{

  try {
    
    let lesson = await Lesson.findByPk(req.params.id)

    await LessonName.destroy({where:{lesson_id:lesson.getDataValue('id')}})
    await Lesson.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Deleted Successfully!'
    })

  } catch (err) {
      next(err)
  }

}

exports.updateLesson = async(req,res,next)=>{

  try {

    let {lessons,...remaining} = req.body

    let lesson = await Lesson.findByPk(req.params.id)

    if(!lesson){
      res.status(404).json({
        status:'fail',
        message:'invalid request'
      })
    }

     await Lesson.update(remaining,{where:{id:req.params.id}})
    
    if(req.body.lessons){
      await LessonName.destroy({where:{lesson_id:lesson.getDataValue('id')}})
      
      for(const les of lessons){
        await LessonName.create({
          lesson_id:lesson.getDataValue('id'),
          lesson:les
        })
      }//for
    }

    res.status(200).json({
      status:'success',
      message:'updated successfully!'
    })

  } catch (err) {
    next(err)
    }

}

exports.getClassLessons = async(req,res,next)=>{

  try {

    let class_section = await classSection.findOne({
      attributes:['id'],
      where:{
        class_id:req.params.class_id,
        section_id:req.params.section_id
      }
    })

    let lesson_id = await Lesson.findOne({
      where:{
        class_section_id:class_section.getDataValue('id'),
        subject_group_id:req.params.subject_group_id,
        subject_id:req.params.subject_id
      }
    })

    if(lesson_id===null)
    return res.status(404).json({
      status:'fail',
      message:'No lesson found!'
    })

    let lessons = await LessonName.findAll({
      attributes:['id','lesson_name'],
      where:{
        lesson_id:lesson_id.getDataValue('id')
      }
    })

    res.status(200).json({
      status:'success',
      data:lessons
    })

  } catch (err) {
   next(err)
  }

}