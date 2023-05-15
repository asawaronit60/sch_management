const {sequelize,DataTypes} = require('../connection')
const Class = require('./Class')
const section = require('./Section')

const userLogs = sequelize.define('user_logs',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  user:{
    type:DataTypes.STRING
  },
  role:{
    type:DataTypes.STRING
  },
  login_date_time:{
    type:DataTypes.DATE,
    defaultValue:DataTypes.NOW
  },
  ip_address:{
    type:DataTypes.STRING
  },
  user_agent:{
    type:DataTypes.STRING
  }


})

userLogs.belongsTo(Class,{foreignKey:'class_id',targetKey:'id',onDelete:null})
userLogs.belongsTo(section,{foreignKey:'section_id',targetKey:'id',onDelete:null})

module.exports = userLogs