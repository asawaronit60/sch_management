
const {Op} = require('sequelize')
const Class = require('../models/Class')
const classTimetable = require('../models/ClassTimetable')
const Section = require('../models/Section')
const Staff = require('../models/Staff')
const Subject = require('../models/Subject')

exports.getTimeTable = async(req,res)=>{

  try {
    let class_id = req.params.class_id
    let section_id = req.params.section_id
    let subject_group_id = req.params.subject_group_id
    let day = req.query.day
    
      let data = await classTimetable.findAll({
        where:{
          class_id,
          section_id,
          subject_group_id,
          day:{[Op.like]:`%${day}%`}
        },
        include:[{
          model:Subject,
          attributes:['name']
        },{
          model:Staff,
          attributes:['name']
        }],
        // group:['subject_gr']
      })

      res.status(200).json({
        status:'success',
        data
      })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}

exports.createTimeTable = async(req,res)=>{

  try {

      await classTimetable.create(req.body)

      res.status(200).json({
        status:'success',
        message:'Time table created successfully!'
      })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
  

}

exports.deleteTimetable = async(req,res)=>{

  try {
    
    await classTimetable.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'time table deleted  successfully!'
    })

  } catch(err){ 
    res.status(400).json({
    status:'fail',
    message:err.message
  })
  }

}

exports.updateTimetable = async(req,res)=>{
  try {
    
    await classTimetable.update(req.body,{
      where:{id:req.params.id}
    })

    res.status(200).json({
      status:'success',
      message:'time table updated successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.getTeacherTimetable = async(req,res)=>{
 
  try {
    
    let results = [] 

    let days = ['monday','tuesday','wensday','thursday','friday','saturday']

    for(const day of days){

    let data = await classTimetable.findAll({
      attributes:['id','time_from','time_to','room_no','day'],
      where:{
        staff_id:req.params.staff_id,
        day:{[Op.like]:`%${day}%`}
      },
      include:[{
        model:Class,
        attributes:['id', 'class']
      },{
        model:Subject,
        attributes:['id','name']
      },{
        model:Section,
        attributes:['id','section']
      }],
    })

    if(data.length)
    results.push(data)

  }
    res.status(200).json({
      status:'success',
      data:results
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}