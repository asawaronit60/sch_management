const ProgramModLesson = require('../models/ProgramModLesson')
const Topic = require('../models/TopicName')
const {sequelize} = require('../connection')

exports.getAllTopics = async(req,res)=>{

  try {

  let [results] = await sequelize.query(`

  select  pgl.id, pg.program_group_name, cls.class as program, modu.name ,les.lesson as lesson from 
  program_mod_lessons as pgl, program_groups as pg , classes as cls , modules as modu ,lesson_names as les where 
  pgl.program_group_id = pg.id and 
  pgl.program_id = cls.id and 
  pgl.module_id = modu.id and 
  pgl.lesson_id = les.id

  `)    

    
  let response = []

  for(const result of results){
    let obj = {}
    obj.id = result.id
    obj.program_group_name = result.program_group_name
    obj.program = result.program
    obj.module = result.module
    obj.lesson = result.lesson

    let topicNames = await Topic.findAll({where:{program_mod_lesson_id:result.id},attributes:['topics']})
    let topics = []
    topicNames.forEach(topic =>topics.push(topic.topics))
    obj.topics = topics
    response.push(obj)

  }


    res.status(200).json({
      status:'success',
      data:response
    })



  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }

}


exports.createTopic = async (req, res) => {

  try {

    let { topics, ...remaining } = req.body

    let id = await ProgramModLesson.findAll({
      where: {
        program_group_id: remaining.program_group_id,
        program_id: remaining.program_id,
        module_id: remaining.module_id,
        semester_id: remaining.semester_id || null,
        lesson_id: remaining.lesson_id,
        level_id: remaining.level_id || null
      },
      attributes: ['id']
    })

    if (id.length != 0) {
      for (const topic of topics) {
        await Topic.create({
          program_mod_lesson_id: id[0].id,
          topic
        })
      }
    }//if
    else {
      let PML = await ProgramModLesson.create(remaining)
      for (const topic of topics) {
        await Topic.create({
          program_mod_lesson_id: PML.id,
          topic
        })
      }//for loop
    }

    res.status(400).json({
      status: 'success',
      message: "Topic created Successully!"
    })


  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }

}

exports.deleteTopic = async(req,res)=>{

  try {

    let PML = await ProgramModLesson.findByPk(req.params.id)
    await Topic.destroy({where:{id:PML.id}})
    await ProgramModLesson.destroy({where:{id:req.params.id}})


      res.status(200).json({
        status:'success',
        message:'Deleted Successfully!'
      })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }

}

exports.updateTopic = async(req,res)=>{

  try {

    let {topics,...remaining} = req.body

    let pml = await ProgramModLesson.findByPk(req.params.id)

    if(!pml){
      res.status(404).json({
        status:'fail',
        message:'invalid request'
      })
    }

     await ProgramModLesson.update(remaining,{where:{id:req.params.id}})
    
    if(req.body.topics){
      await Topic.destroy({where:{program_mod_lesson_id:pml.id}})
      
      for(const topic of topics){
        await Topic.create({
          program_mod_lesson_id:pml.id,
          topics:topic
        })
      }//for
    }

    res.status(200).json({
      status:'success',
      message:'updated successfully!'
    })


  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }

}