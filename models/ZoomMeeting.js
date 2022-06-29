const {sequelize,DataTypes} = require('../connection')

const zoonmMeeting = sequelize.define('zoom_meeting',{

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
  staff_list:{
    type:DataTypes.JSON,
    defaultValue:null
  },
  created_by:{
    type:DataTypes.INTEGER,
    defaultValue:null
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
    type:DataTypes.INTEGER,
    defaultValue:1
  },
  client_video:{
    type:DataTypes.INTEGER,
    defaultValue:1
  },
  description:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:1
  }
})

module.exports = zoonmMeeting