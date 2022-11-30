const classTeacher = require('../models/ClassTeachers')
const classSection = require('../models/ClassSections')
const Staff = require('../models/Staff')
const Class = require('../models/Class')
const Section = require('../models/Section')



exports.getClassTeacher = async(req,res)=>{

  try {
    
    // let data = await classTeacher.findAll({
    //   include:[
    //     {
    //       model:classSection,
    //       attributes:['id'],
    //       include:[{
    //         model:Class,
    //         attributes:['class']
    //       },{
    //         model:Section,
    //         attributes:['section']
    //       }]
    //     },
    //   {
    //     model:Staff,
    //     attributes:['name']
    //   }]
    // })

    let results = []

    let class_section_id = await classTeacher.findAll({
      include:{
        model:classSection,
        attributes:['id'],
        include:[
          {
            model:Class,
            attributes:['class']
          },
          {
            model:Section,
            attributes:['section']
          }
        ]
      },
      group:['class_section_id']
    })

    for (const id of class_section_id){
  
       let obj = {}

       let teachers = []

       let data = await classTeacher.findAll({
        attributes:['id'],
        where:{
          class_section_id:id.getDataValue('class_section_id')
        },
        include:{
          model:Staff,
          attributes:['name']
        }
       })

       obj.class = id.getDataValue('class_section').class.class
       obj.section = id.getDataValue('class_section').section.section
       
       data.forEach(cls_teachers=>{

        teachers.push(cls_teachers.getDataValue('staff').name)

       })

       obj.class_teachers = teachers

       results.push(obj)
       
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



exports.createClassTeacher = async(req,res)=>{

  try {
    
   let teachers_id = req.body.teachers_id
   
  

   let classSectionId = await classSection.findOne({
    where:{
      class_id:req.body.class_id,
      section_id:req.body.section_id
    }
   })

   for(const id of teachers_id){

    let teacherAlreadyExist  = await classTeacher.findOne({
      where:{
        class_section_id:classSectionId.id,
        staff_id:id
      }
    })

    if(teacherAlreadyExist){
    
      return res.status(400).json({
        status:'fail',
        message:'Record Already Exists!!'
      })
    }

   }


   
   for(const id of teachers_id){

    await classTeacher.create({
      class_section_id:classSectionId.getDataValue('id'),
      staff_id:id
    })

   }

   res.status(200).json({
    status:'success',
    message:'Class teacher added successfully!',
   })


  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}