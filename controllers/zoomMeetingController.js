const zoomMeetingStaff = require('../models/zoomMeetingStaffs')
const api = require('../utils/apiFactory')
const zoomMeeting = require('../models/ZoomMeeting')
const Staff = require('../models/Staff')



exports.getAllMettings = async (req, res,next) => {

  try {

    let result = []

    let meetings  = await zoomMeeting.findAll({
      include:{
        model:Staff,
        attributes:['id','name'],
        // as:'created_by'
      }
    })


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

      let staff = await zoomMeetingStaff.findAll({
        where:{zoom_meeting_id:meet.getDataValue('id')},
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

    result.push(obj)
    }

 

    res.status(200).json({
      status: 'success',
      data:result
    })

  } catch (err) {
   next(err)
  }

}

exports.createMeeting = async (req, res,next) => {

  try {

    if (req.user) {
      req.body.created_by = req.user.id
    }
    else {
      let staff = await Staff.findAll({ attributes: ['id'], limit: 1 })
      req.body.created_by = staff[0].getDataValue('id')
    }

    let zoomMeetings = await zoomMeeting.create(req.body)

    let { staff_id } = req.body

    for (const id of staff_id) {
      await zoomMeetingStaff.create({
        staff_id: id,
        zoom_meeting_id: zoomMeetings.getDataValue('id')
      })

    }

    res.status(200).json({
      status: 'success',
      message: 'zoom meeting created successfully!'
    })


  } catch (err) {
   next(err)
  }


}
exports.deleteMeeting = api.delete(zoomMeeting)
exports.updateStatus = async(req,res,next)=>{

  try {

    await zoomMeeting.update({status:req.body.status},{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'status updated!'
    })

  } catch (err) {
    next(err)
  }

}