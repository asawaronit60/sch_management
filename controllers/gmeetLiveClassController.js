const gmeetLiveClass = require('../models/GMeetLiveClass')
const gmeetLiveClassSection = require('../models/GmeetLiveClassSection')
const UserRole = require('../models/UserRoles')
const Staff = require('../models/Staff')
const Class = require('../models/Class')
const Section = require('../models/Section')
const User = require('../models/User')
const classSection = require('../models/ClassSections')

exports.getGmeetLiveClasses = async(req,res)=>{

  try {
    
    let results = []

    let classes = await gmeetLiveClass.findAll({
      include:[{
        model:UserRole,
        attributes:['name']
      },{
        model:Staff,
        attributes:['name']
      },{
        model:User,
        attributes:['name']
      }]

    })
    

    for(const liveClass of classes){

      let obj = {}

      obj.id = liveClass.getDataValue('id')
      obj.class_title = liveClass.getDataValue('class_title')
      obj.date = liveClass.getDataValue('class_date')
      obj.created_by = liveClass.getDataValue('user').name + `(${liveClass.getDataValue('user_role').name})`
      obj.status = liveClass.getDataValue('status')
      obj.created_for = liveClass.getDataValue('staff').name
      obj.url = liveClass.getDataValue('url')


      let class_section = []

      let classSections = await gmeetLiveClassSection.findAll({
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
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.createLiveClass = async(req,res)=>{

  try {
    
    let class_section = []

    let { 
      class_id , section_id , class_title,
      class_date,
      class_duration,
      description,
      role_id,
      staff_id,
      url,
      status 
    } = req.body

    for(const id of section_id){
      let data = await classSection.findOne({
        attributes:['id'],
        where:{
          class_id,
          section_id:id
        }
      })

      class_section.push(data.id)
    }    
    
    let created_by

    if(req.user)
    created_by = req.user.id
    else created_by = 6

    let newLiveClass = await gmeetLiveClass.create({
      class_title,
      class_date,
      class_duration,
      description,
      role_id,
      url,
      created_for:staff_id,
      status,
      created_by
    })

    for (const id of class_section){
      await gmeetLiveClassSection.create({
        class_section_id:id,
        gmeet_live_id:newLiveClass.getDataValue('id')
      })
    }

    res.status(200).json({
      stauts:'success',
      message:'gmeet live class created successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.deleteLiveClass = async(req,res)=>{

  try {
    
    await gmeetLiveClass.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'g meet live class deleted successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}