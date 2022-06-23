const {sequelize,DataTypes} = require('../connection')

const staffAttendance = sequelize.define('staff_attendance_type',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  type:{
    type:DataTypes.STRING,
    allowNull:false
  },
  key_value:{
    type:DataTypes.STRING,
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    allowNull:false
  }

})

module.exports = staffAttendance