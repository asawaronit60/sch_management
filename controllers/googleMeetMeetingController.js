const GoogleMeetMeeting = require('../models/GmeetLiveMeeting')
const Staff = require('../models/Staff')
const GoogleMeetMeetingStaffs = require('../models/googleMeetMeetingStaff')

exports.getAllMeetings = async(req,res,next)=>{
  try {
    
    let meetings = await GoogleMeetMeeting.findAll({
        include:{
          model:Staff,
          attributes:['id','name']
        }
    })

    let results = []

    for(const meet of meetings){
      
      let obj = {}
      obj.id = meet.getDataValue('id')
      obj.title = meet.getDataValue('title')
      obj.duration = meet.getDataValue('duration')
      obj.description = meet.getDataValue('description')
      obj.date = meet.getDataValue('date')
      obj.host_video = meet.getDataValue('host_video')
      obj.client_video = meet.getDataValue('client_video')
      obj.status = meet.getDataValue('status')
      obj.created_by = meet.getDataValue('staff')

      let staffs= [] 

      let staff = await GoogleMeetMeetingStaffs.findAll({
        where:{google_meet_meeting_id:meet.getDataValue('id')},
        include:{
          model:Staff,
          attributes:['id','name']
        }  
    })

    staff.forEach(st=>{
      staffs.push({
        id:st.getDataValue('staff').id,
        name:st.getDataValue('staff').name
      })
    })

  
    obj.staff_list = staffs

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


exports.createMeeting = async(req,res,next)=>{
  try {
    
      if(req.user){
        req.body.created_by = req.user.id
      }
      else if(!req.body.created_by){
        let staff = await Staff.findAll({ attributes:['id'], limit:1})
        req.body.created_by = staff[0].getDataValue('id')
      }

      let newMeeting = await GoogleMeetMeeting.create(req.body)

      for(const id of req.body.staff_id){
        await GoogleMeetMeetingStaffs.create({
          google_meet_meeting_id:newMeeting.getDataValue('id'),
          staff_id:id
        })
      }


      res.status(200).json({
        status:'success',
        message:'Meeting created successfully!'
      })

  } catch (err) {
    next(err)
  }
}

exports.deleteMeeting = async(req,res,next)=>{
  try {
    
    await GoogleMeetMeeting.destroy({where:{id:req.params.id}})
    await GoogleMeetMeetingStaffs.destroy({where:{google_meet_meeting_id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Meeting deleted successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.updateStatus = async(req,res,next)=>{
  try {

    await GoogleMeetMeeting.update({status:req.body.status},{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'status updated!'
    })

  } catch (err) {
    next(err)
  }
}