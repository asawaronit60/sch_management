const {sequelize,DataTypes} = require('../connection')
const Student = require('./student')
const AttendenceType = require('./AttendenceType')

const StudentAttendence = sequelize.define('student_attendence',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  // student_session_id:{
  //   type:DataTypes.INTEGER,
  //   allowNull:false,
  //   defaultValue:0
  // },
  date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  note:{
    type:DataTypes.STRING,
    allowNull:false
  },

  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }
})


StudentAttendence.belongsTo(Student,{foreignKey:'student_id',targetKey:'id',onDelete:'CASCADE'})
StudentAttendence.belongsTo(AttendenceType,{foreignKey:'attendence_type_id',targetKey:'id',onDelete:null})

// StudentAttendence.sync({alter:true})


module.exports = StudentAttendence