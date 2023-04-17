const zoomLiveClass = require('../models/ZoomLiveClass')
const zoomLiveClassSection = require('../models/ZoomLiveClassSection')
const UserRole = require('../models/UserRoles')
const Staff = require('../models/Staff')
const Class = require('../models/Class')
const Section = require('../models/Section')
const User = require('../models/User')
const classSection = require('../models/ClassSections')


exports.getLiveClasses = async(req,res,next)=>{

  try {
    
    let results = []

    let classes = await zoomLiveClass.findAll({
      include:[{
        model:UserRole,
        attributes:['id','name']
      },{
        model:Staff,
        attributes:['id','name'],
        as:'createdFor'
      },{
        model:Staff,
        attributes:['id','name'],
        as:'createdBy'
      }]

    })

    console.log("classess",(classes[0].getDataValue('status')))

    for(const liveClass of classes){

      let obj = {}

      obj.id = liveClass.getDataValue('id')
      obj.class_title = liveClass.getDataValue('class_title')
      obj.date = liveClass.getDataValue('class_date')
      obj.created_by = liveClass.getDataValue('createdBy')//.name + `(${liveClass.getDataValue('user_role').name})`
      obj.status = liveClass.getDataValue('status')
      obj.created_for = liveClass.getDataValue('createdFor')//.name


      let class_section = []

      let classSections = await zoomLiveClassSection.findAll({
        where:{
          zoom_live_id:liveClass.getDataValue('id')
        },
        include:{
          model:classSection,
         include: [{
            model:Class,
            attributes:['class']
          },{
            model:Section,
            attributes:['section']
          }]
        }
      })

      classSections.forEach(cls_sec=>{
        class_section.push(
          cls_sec.getDataValue('class_section').class.class +
          `(${cls_sec.getDataValue('class_section').section.section})`
          
          )
      })

      obj.class = class_section

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

exports.createLiveClass = async(req,res,next)=>{

  try {
    
    let class_sections = []

    let { class_id , section_id , class_title,
      class_date,
      class_duration,
      description,
      host_video,
      role_id,
      created_for,
      client_video,status } = req.body

    for(const id of section_id){
      let class_sec = await classSection.findOne({
        attributes:['id'],
        where:{
          class_id,
          section_id:id
        }
      })
      if(class_sec)
      class_sections.push(class_sec.getDataValue('id'))
    }    
    
    let created_by

    if(req.user)
    created_by = req.user.id
    else if(req.body.created_by){
      created_by = req.body.created_by
    }
    else {
      let staff = await Staff.findAll({limit:1})
      created_by = staff[0].getDataValue('id')
    }

    let newLiveClass = await zoomLiveClass.create({
      class_title,
      class_date,
      class_duration,
      description,
      host_video,
      client_video,
      role_id,
      created_for,
      status,
      created_by
    })

    for (const id of class_sections){
      await zoomLiveClassSection.create({
        class_section_id:id,
        zoom_live_id:newLiveClass.getDataValue('id')
      })
    }

    res.status(200).json({
      stauts:'success',
      message:'Zoom live class created successfully!'
    })

  } catch (err) {
    
    next(err)
  }

}

exports.deleteLiveClass = async(req,res,next)=>{

  try {
    
    await zoomLiveClass.destroy({where:{id:req.params.id}})
    
    await zoomLiveClassSection.destroy({where:{zoom_live_id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'zoom live class deleted successfully!'
    })


  } catch (err) {
    next(err)
  }

}