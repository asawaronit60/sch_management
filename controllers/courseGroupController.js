const CourseGroup = require('../models/CourseGroup')
const { sequelize } = require('../connection')
const api = require('../utils/apiFactory')


exports.createCourseGroup = async (req, res) => {

  try {

    await CourseGroup.create(req.body)

    res.status(200).json({
      status: 'success',
      message: 'Course group created successfully!'
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }

}


exports.getAllCourseGroup = async (req, res) => {

  try {
    // join modules AS md ON FIND_IN_SET(md.id , cg.subjects)
    // GROUP_CONCAT(md.name) as modules
    let [results] = await sequelize.query(`

    select pg.program_group_name , cls.class  ,cg.subjects
    
     from 
    program_groups as pg , classes as cls ,  course_groups as cg  
   
    where cg.program_name_id = pg.id and 
    cg.class_id = cls.id;
     
    `)

    let response = []

    for (const result of results) {
      let obj = {}
      obj.program_group_name = result.program_group_name
      obj.class = result.class

      let [modules] = await sequelize.query(`select name from modules where id in (?)`,
        {
          replacements: [result.subjects.split(',')]
        })

      let mod_names = []

      modules.forEach((names) => {
        mod_names.push(names.name)
      })

      obj.module_names = mod_names
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

exports.createCourseGroup = async (req, res) => {

  try {

    req.body.subjects = req.body.subjects.toString()
    await CourseGroup.create(req.body)

    res.status(200).json({
      status: 'success',
      message: 'Course group created successfully!'
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }

}

exports.deleteCourseGroup = api.delete(CourseGroup)

exports.updateCourseGroup = async (req, res) => {

  try {

    if (req.body.subjects)
      req.body.subjects = req.body.subjects.toString()

    await CourseGroup.update(req.body, { where: { id: req.params.id } })

    res.status(200).json({
      status: 'success',
      message: 'Course Group updated successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }

}