const {sequelize,DataTypes} = require('../connection')
const Role = require('./UserRoles')
const Staff = require('./Staff')
const User = require('./User')


const GmeetLiveClass = sequelize.define('g_meet_live_class',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  class_title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  class_date:{
    type:DataTypes.DATEONLY,
    defaultValue:DataTypes.NOW
  },
  class_duration:{
    type:DataTypes.FLOAT
  },
  description:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  url:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  status:{
    type:DataTypes.STRING,
    defaultValue:null
  }
})

GmeetLiveClass.belongsTo(Role,{foreignKey:'role_id',targetKey:'id'})
GmeetLiveClass.belongsTo(Staff,{foreignKey:'created_for',targetKey:'id'})
GmeetLiveClass.belongsTo(User,{foreignKey:'created_by',targetKey:'id'})

module.exports = GmeetLiveClass