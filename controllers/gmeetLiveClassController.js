const gmeetLiveClass = require('../models/GMeetLiveClass')
const gmeetLiveClassSection = require('../models/GmeetLiveClassSection')
const UserRole = require('../models/UserRoles')
const Staff = require('../models/Staff')
const Class = require('../models/Class')
const Section = require('../models/Section')
const User = require('../models/User')
const classSection = require('../models/ClassSections')
const AppError = require('../utils/AppError')

exports.getGmeetLiveClasses = async(req,res,next)=>{

  try {
    
    let results = []

    let classes = await gmeetLiveClass.findAll({
      include:[{
        model:UserRole,
        attributes:['id', 'name']
      },{
        model:Staff,
        attributes:[ 'id', 'name'],
        as:'createdFor'
      },{
        model:Staff,
        attributes:['id', 'name'],
        as:'createdBy'
      }]

    })
    

    for(const liveClass of classes){

      let obj = {}

      obj.id = liveClass.getDataValue('id')
      obj.class_title = liveClass.getDataValue('class_title')
      obj.date = liveClass.getDataValue('class_date')
      obj.created_by = liveClass.getDataValue('createdBy').name + `(${liveClass.getDataValue('user_role').name})`
      obj.status = liveClass.getDataValue('status')
      obj.created_for = liveClass.getDataValue('createdFor').name
      obj.url = liveClass.getDataValue('url')


      let class_section = []

      let classSections = await gmeetLiveClassSection.findAll({
        where:{
          gmeet_live_id:liveClass.getDataValue('id')
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
    
    let class_section = []

    if(!req.body.role_id)
    return next(new AppError('Role is required',404))

    if(!req.body.created_for)
    return next(new AppError('Created for is required',404))

    if(!req.body.class_id)
    return next(new AppError('Class is required',404))

    if(req.body.section_id.length===0)
    return next(new AppError('section is required',404))

    let { 
      class_id , section_id , class_title,
      class_date,
      class_duration,
      description,
      role_id,
      created_for,
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
      if(data)
      class_section.push(data.getDataValue('id'))
    }    
    
    if(class_section.length===0)
    return next(new AppError('No class or section selected!',404))

    let created_by

    if(req.user)
    created_by = req.user.id
    else if(req.body.created_by){
      created_by = req.body.created_by
    } else{
      let staff = await Staff.findAll({limit:1})
      created_by = staff[0].getDataValue('id')
      console.log("this is created by", created_by)
    }

    let newLiveClass = await gmeetLiveClass.create({
      class_title,
      class_date,
      class_duration,
      description,
      role_id,
      url,
      created_for,
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
    next(err)
  }

}

exports.deleteLiveClass = async(req,res,next)=>{

  try {
    
    await gmeetLiveClass.destroy({where:{id:req.params.id}})

    await gmeetLiveClassSection.destroy({
      where:{
        gmeet_live_id:req.params.id
      }
    })

    res.status(200).json({
      status:'success',
      message:'g meet live class deleted successfully!'
    })

  } catch (err) {
    next(err)
  }


}