const {sequelize,DataTypes} = require('../connection')

const AttendenceType = sequelize.define('attendence_type',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  type:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  key_value:{
    type:DataTypes.STRING,
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  }
})

module.exports = AttendenceType