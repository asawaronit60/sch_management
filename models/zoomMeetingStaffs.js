const {sequelize,DataTypes} = require('../connection')
const zoomMeeting = require('./ZoomMeeting')
const staff = require('./Staff')


const zoomMeetingStaffs = sequelize.define('zoom_meeting_staff',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  }

})

zoomMeetingStaffs.belongsTo(zoomMeeting,{foreignKey:'zoom_meeting_id',targetKey:'id'})
zoomMeetingStaffs.belongsTo(staff,{foreignKey:'staff_id',targetKey:'id'})

module.exports = zoomMeetingStaffs