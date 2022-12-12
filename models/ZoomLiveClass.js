const {sequelize,DataTypes} = require('../connection')
const Role = require('./UserRoles')
const Staff = require('./Staff')
const User = require('./User')

const zoomLiveClass = sequelize.define('zoom_live_class',{

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
  host_video:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  client_video:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  status:{
    type:DataTypes.STRING,
    defaultValue:null
  }

})

zoomLiveClass.belongsTo(Role,{foreignKey:'role_id',targetKey:'id'})
zoomLiveClass.belongsTo(Staff,{foreignKey:'created_for',targetKey:'id'})
zoomLiveClass.belongsTo(User,{foreignKey:'created_by',targetKey:'id'})

// zoomLiveClass.sync({alter:true})

module.exports = zoomLiveClass