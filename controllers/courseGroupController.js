const CourseGroup = require('../models/CourseGroup')
const Class = require('../models/Class')
const ProgramGroup = require('../models/ProgramGroup')

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

    let resp = []

  await CourseGroup.findAll((cg)=>{
    
    ProgramGroup.findAll({where:{id:cg.program_name_id}}).then((pg)=>{

        let obj = {}

        obj.ProgramGroup = pg.program_group_name


    })
     



  })
  
   

    res.send( data)
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}