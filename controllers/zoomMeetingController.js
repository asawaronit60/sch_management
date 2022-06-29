const zoomMeeting = require('../models/ZoomMeeting')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')


exports.getAllMettings = async(req,res)=>{

  try {

    let [results] = await sequelize.query(`
    
    select zm.title , zm.date , zs.zoom_api_key , zm.status from
    zoom_meetings as zm , zoom_settings as zs

    ;`)

    res.status(200).json({
      status:'success',
      data:results
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
    
    res.send(req.user)


  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}
exports.deleteMeeting = api.delete(zoomMeeting)
exports.updateMeeting = api.update(zoomMeeting)