const topic = require('../models/Topic')
const topicName = require('../models/TopicName')
const classSection = require('../models/ClassSections')
const lessonName = require('../models/LessonName')
const Class = require('../models/Class')
const Section = require('../models/Section')
const subjectGroup = require('../models/SubjectGroup')
const subject = require('../models/Subject')
const appError = require('../utils/appError')

exports.getAllTopics = async(req,res,next)=>{

  try {

    let topics = await topic.findAll({
      attributes:['id'],
      include:[
        {
          model:classSection,
          attributes:['id'],
          include:[{
            model:Class,
            attributes:['class']
          },{
            model:Section,
            attributes:['section']
          }]
        },{
          model:subject,
          attributes:['name']
        },{
          model:subjectGroup,
          attributes:['name']
        },
        {
          model:lessonName,
          attributes:['lesson_name']
        }
      ]

    })

    let results = []

    for(const topic of topics){

      let obj = {}

      let names = []

      obj.id = topic.getDataValue('id')
      obj.class = topic.getDataValue('class_section').class.class
      obj.section = topic.getDataValue('class_section').section.section
      obj.subject = topic.getDataValue('subject').name
      obj.subject_group = topic.getDataValue('subject_group').name
      obj.lessonName = topic.getDataValue('lesson_name').lesson_name

      let topics_name = await topicName.findAll({
        where:{
          topic_id:topic.getDataValue('id')
        }
      })
      

      topics_name.forEach(el=>{
          let name = el.getDataValue('topic_name')
          let id = el.getDataValue('id')
          let status = el.getDataValue('status')
        names.push({
          id,
          name
        })
      
      })

      obj.topic_names = names

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


exports.createTopic = async (req, res,next) => {

  try {

    let { topics } = req.body

    let classSectionId = await classSection.findOne({
      attributes:['id'],
      where:{
        class_id:req.body.class_id,
        section_id:req.body.section_id
      }
    })

    if(!classSectionId)
    return next(new appError('No such class and section!',404))

    let newTopic = await topic.create({
      class_section_id:classSectionId.getDataValue('id'),
      subject_id:req.body.subject_id,
      subject_group_id:req.body.subject_group_id,
      lesson_name_id:req.body.lesson_name_id,
    })

    for(const topic of topics ){
      await topicName.create({
        topic_name:topic,
        topic_id:newTopic.getDataValue('id')
      })
    }


    res.status(200).json({
      status: 'success',
      message: "Topic created Successully!"
    })


  } catch (err) {
   next(err)
  }

}

exports.getSubjectStatus = async(req,res,next)=>{
  
  try {

    let classSectionId = await classSection.findOne({
      attributes:['id'],
      where:{
        class_id:req.params.class_id,
        section_id:req.params.section_id
      }
    })

    if(!classSectionId)
    return next(new appError('No such class ans section!',404))

    let topics = await topic.findAll({
      attributes:['id'],
      include:[
        {
          model:classSection,
          attributes:['id'],
          include:[{
            model:Class,
            attributes:['class']
          },{
            model:Section,
            attributes:['section']
          }]
        },{
          model:subject,
          attributes:['name']
        },{
          model:subjectGroup,
          attributes:['name']
        },
        {
          model:lessonName,
          attributes:['lesson_name']
        }
      ],
      where:{
        class_section_id:classSectionId.getDataValue('id'),
        subject_group_id:req.params.subject_group_id,
        subject_id:req.params.subject_id
      }

    })

    let results = []

    for(const topic of topics){

      let obj = {}

      let names = []

      obj.id = topic.getDataValue('id')
      obj.class = topic.getDataValue('class_section').class.class
      obj.section = topic.getDataValue('class_section').section.section
      obj.subject = topic.getDataValue('subject').name
      obj.subject_group = topic.getDataValue('subject_group').name
      obj.lessonName = topic.getDataValue('lesson_name').lesson_name

      let topics_name = await topicName.findAll({
        where:{
          topic_id:topic.getDataValue('id')
        }
      })
      

      topics_name.forEach(el=>{
          let name = el.getDataValue('topic_name')
          let id = el.getDataValue('id')
          let status = el.getDataValue('status')
          let topic_completion_date = el.getDataValue('topic_completion_date')
        names.push({
          id,
          name,
          topic_completion_date,
          status
        })
      
      })

      obj.topic_names = names

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

exports.updateTopicStatus = async(req,res)=>{

  try {
    
    await topicName.update({
      status:req.body.status,
      topic_completion_date:req.body.topic_completion_date
    },{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Status updated successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}

exports.deleteTopic = async(req,res)=>{

  try {

    // await topic.destroy({where:{id:req.params.id}})
    await topicName.destroy({where:{id:req.params.id}})


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

    // let updateTopics = await topic.findByPk(req.params.id)

    // if(!updateTopics){
    //   res.status(404).json({
    //     status:'fail',
    //     message:'invalid request'
    //   })
    // }

    if(remaining)
     await topic.update(remaining,{where:{id:req.params.id}})
    
    if(req.body.topics){
      await topicName.destroy({where:{topic_id:req.params.id}})
      
      for(const topic of topics){
        await topicName.create({
          topic_id:req.params.id,
          topic_name:topic
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