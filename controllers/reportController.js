const userLog = require('../models/UserLogs')
const Class = require('../models/Class')
const section = require('../models/Section')
const Student = require('../models/student')
const hostelRoom = require('../models/HostelRoom')
const roomType = require('../models/HostelRoomType')
const Hostel = require('../models/Hostel')


exports.getAllLogs = async(req,res,next)=>{
  try {

    let whereObj = {}

    if(req.query.role){
      whereObj.role = role
    }

    let data = await userLog.findAll({
      where:whereObj,
      include:[
        { model:Class ,attributes:['id','class']   },
        { model:section ,attributes:['id','section']   }
      ]
    })

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}


exports.getAlumni = async(req,res,next)=>{
  try {

    let {class_id,section_id,session_id} = req.params
    
    let data = await Student.findAll({
      where:{
        class_id,
        section_id,
        session_id
      }
    })

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.getHostelDetails  = async(req,res,next)=>{
  try {

    let {class_id,section_id,hostel_id} = req.params
    
    let data = await Student.findAll({
      where:{
        class_id,
        section_id,
        hostel_id,
      },
      include:[
        {model:Hostel,attributes:['id','name']},
        {
          model:hostelRoom,
          include:{
          model:roomType
          }
        }
      ]
    })

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}
