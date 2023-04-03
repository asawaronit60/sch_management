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
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  }
})
// AttendenceType.sync({alter:true})
module.exports = AttendenceType