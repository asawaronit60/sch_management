const {sequelize,DataTypes } = require('../connection')
const Student = require('./student')
const OnlineExam = require('./OnlineExam')

const OnlineExamStudents = sequelize.define('online_exam_students',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  }

})

OnlineExamStudents.belongsTo(Student,{foreignKey:'student_id',targetKey:'id',onDelete:'cascade'})
OnlineExamStudents.belongsTo(OnlineExam,{foreignKey:'online_exam_id',targetKey:'id',onDelete:'cascade'})

module.exports = OnlineExamStudents