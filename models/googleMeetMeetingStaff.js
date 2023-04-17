const {sequelize,DataTypes} = require('../connection')
const googleMeetMeeting = require('./GmeetLiveMeeting')
const staff = require('./Staff')


const googleMeetMeetingStaffs = sequelize.define('google_meet_meeting_staff',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  }

})

googleMeetMeetingStaffs.belongsTo(googleMeetMeeting,{foreignKey:'google_meet_meeting_id',targetKey:'id'})
googleMeetMeetingStaffs.belongsTo(staff,{foreignKey:'staff_id',targetKey:'id'})
// googleMeetMeetingStaffs.sync({alter:true})
module.exports = googleMeetMeetingStaffs