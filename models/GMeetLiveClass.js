const {sequelize,DataTypes} = require('../connection')
const Role = require('./UserRoles')
const Staff = require('./Staff')
const User = require('./User')
const { all } = require('../routes/admissionEnquiry')


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
    type:DataTypes.FLOAT,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  url:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.STRING,
    defaultValue:null
  }
})

GmeetLiveClass.belongsTo(Role,{foreignKey:'role_id',targetKey:'id'})
GmeetLiveClass.belongsTo(Staff,{foreignKey:'created_for',targetKey:'id',as:'createdFor',onDelete:'CASCADE'})
GmeetLiveClass.belongsTo(Staff,{foreignKey:'created_by',targetKey:'id',as:'createdBy',onDelete:'CASCADE'})

// GmeetLiveClass.sync({alter:true})

module.exports = GmeetLiveClass