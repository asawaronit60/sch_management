const {sequelize,DataTypes} = require('../connection')

const StudentAttendence = sequelize.define('student_attendence',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  student_session_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0
  },
  date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  attendence_type_id:{
    type:DataTypes.INTEGER,
    defaultValue:null
  },
  remark:{
    type:DataTypes.STRING,
    allowNull:false
  },
  biometric_device_data:{
    type:DataTypes.STRING
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }
})

module.exports = StudentAttendence