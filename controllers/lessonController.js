const Lesson = require('../models/ProgramGroupModule')
const {sequelize} = require('../connection')
const api = require('../utils/apiFactory')
const LessonName = require('../models/LessonName')

exports.getAllLessons = async(req,res)=>{

    try {
      
      let [results] = await sequelize.query(`

        select  pgm.id, pg.program_group_name, cls.class as program, modu.name as module from 
        program_group_modules as pgm, program_groups as pg , classes as cls , modules as modu where 
        pgm.program_group_id = pg.id and 
        pgm.program_id = cls.id and 
        pgm.module_id = modu.id 

        `)

      let response = []

      for(const result of results){
        let obj = {}
        obj.id = result.id
        obj.program_group_name = result.program_group_name
        obj.program = result.program
        obj.module = result.module

        let lessonnames = await LessonName.findAll({where:{program_group_module_id:result.id},attributes:['lesson']})
        let names = []
        lessonnames.forEach(lesson =>names.push(lesson.lesson))
        obj.lesson = names
        response.push(obj)

      }


        res.status(200).json({
          status:'success',
          data:response
        })

    } catch (err) {
      res.status(400).json({
        status:'fail',
        message:err.message
      })
    }
}


exports.createLesson = async(req,res)=>{

  try {

      let { lesson , ...remaining} = req.body

      let id = await Lesson.findAll({where:{
          program_group_id:remaining.program_group_id,
          program_id:remaining.program_id,
          module_id:remaining.module_id,
          semester_id:remaining.semester_id,
          level_id:remaining.level_id || null
      },
      attributes:['id']
    })

    if(id.length!=0){
      for(const les of lesson){
        await LessonName.create({
          program_group_module_id:id[0].id,
          lesson:les
        })
      }
    }//if
    else{
      let group = await Lesson.create(remaining)
      for(const les of lesson){
        await LessonName.create({
          program_group_module_id:group.id,
          lesson:les
        })
      }
    }

    res.status(200).json({
      status:'success',
      message:'Lesson added successfully!'
    })



  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.delelteLesson = async(req,res)=>{

  try {
    
    let programGroupModule = await Lesson.findByPk(req.params.id)

    await LessonName.destroy({where:{program_group_module_id:programGroupModule.id}})
    await Lesson.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Deleted Successfully!'
    })

  } catch (err) {
      res.status(400).json({
        status:'fail',
        message:err.message
      })
  }

}

exports.updateLesson = async(req,res)=>{

  try {

    let {lesson,...remaining} = req.body

    let pgm = await Lesson.findByPk(req.params.id)

    if(!pgm){
      res.status(404).json({
        status:'fail',
        message:'invalid request'
      })
    }

     await Lesson.update(remaining,{where:{id:req.params.id}})
    
    if(req.body.lesson){
      await LessonName.destroy({where:{program_group_module_id:pgm.id}})
      
      for(const les of lesson){
        await LessonName.create({
          program_group_module_id:pgm.id,
          lesson:les
        })
      }//for
    }

    res.status(200).json({
      status:'success',
      message:'updated successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
    }

}