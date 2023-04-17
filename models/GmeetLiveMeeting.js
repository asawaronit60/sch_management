const {sequelize,DataTypes} = require('../connection')
const Staff = require('./Staff')


const googleMeetMeeting = sequelize.define('google_meet_meeting',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  date:{
    type:DataTypes.DATEONLY,
    defaultValue:DataTypes.NOW
  },
  duration:{
    type:DataTypes.FLOAT,
    defaultValue:null
  },
  host_video:{
    type:DataTypes.STRING,
    defaultValue:'Disabled'
  },
  client_video:{
    type:DataTypes.STRING,
    defaultValue:'Disabled'
  },
  description:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  status:{
    type:DataTypes.STRING,
    defaultValue:"awaited"
  }
})

googleMeetMeeting.belongsTo(Staff,{foreignKey:'created_by',targetKey:'id',onDelete:'CASCADE'})

// googleMeetMeeting.sync({alter:true})

module.exports = googleMeetMeeting