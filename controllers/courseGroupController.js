const CourseGroup = require('../models/CourseGroup')
const {sequelize} = require('../connection')

exports.createCourseGroup = async(req,res)=>{

  try {

    await CourseGroup.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Course group created successfully!'
    })
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}


exports.getAllCourseGroup = async(req,res)=>{

  try {

    let [results] = await sequelize.query(`

    select pg.program_group_name , cls.class , md.name from 
    course_groups as cg , program_groups as pg ,  classes as cls  , modules as md where

    cg.program_name_id = pg.id and
    cg.class_id = cls.id and 
    md.id in (select )
    
    `)
  
  
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}