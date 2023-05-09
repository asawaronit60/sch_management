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
  date:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  note:{
    type:DataTypes.STRING,
    allowNull:true
  },
  attendence:{
    type:DataTypes.STRING,
    defaultValue:'present',
    allowNull:false
  }
})


StudentAttendence.belongsTo(Student,{foreignKey:'student_id',targetKey:'id',onDelete:'CASCADE'})
Student.hasMany(StudentAttendence)
// StudentAttendence.belongsTo(AttendenceType,{foreignKey:'attendence_type_id',targetKey:'id',onDelete:null})

// StudentAttendence.sync({alter:true})


module.exports = StudentAttendence