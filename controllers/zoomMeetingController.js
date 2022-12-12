const zoomMeetingStaff = require('../models/zoomMeetingStaffs')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')
const zoomMeeting = require('../models/ZoomMeeting')
const Staff = require('../models/Staff')



exports.getAllMettings = async(req,res)=>{

  try {
 
    let data = await zoomMeeting.findAll({
      include:{
        model:Staff,
        attributes:['name']
      }
    })

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status:'success',
      message:err.message
    })
  }

}

exports.createMeeting = async(req,res)=>{

  try {
    
    req.body.created_by = req.user.id || 2

    let zoomMeetings = await zoomMeeting.create(req.body)

    let {staff_id} = req.body

    for (const id of staff_id){
      await zoomMeetingStaff.create({
        staff_id:id,
        zoom_meeting_id:zoomMeetings.getDataValue('id')
      })

    }

    res.status(200).json({
      status:'success',
      message:'zoom meeting created successfully!'
    })


  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}
exports.deleteMeeting = api.delete(zoomMeeting)
exports.updateMeeting = api.update(zoomMeeting)