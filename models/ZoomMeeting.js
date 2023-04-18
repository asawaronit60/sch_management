const {sequelize,DataTypes} = require('../connection')
const Staff = require('./Staff')
const User = require('./User')

const zoomMeeting = sequelize.define('zoom_meeting',{

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
  // staff_list:{
  //   type:DataTypes.JSON,
  //   defaultValue:null
  // },
  // created_by:{
  //   type:DataTypes.INTEGER,
  //   defaultValue:null
  // },
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
    defaultValue:1
  }
})

zoomMeeting.belongsTo(Staff,{foreignKey:'created_by',targetKey:'id',onDelete:'CASCADE'})

// zoomMeeting.sync({alter:true})

module.exports = zoomMeeting