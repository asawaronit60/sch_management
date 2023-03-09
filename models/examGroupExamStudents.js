const {sequelize,DataTypes} = require('../connection')
const examGroupExam = require('./examGroupExam')
const Student = require('./student')


const examGroupExamStudents = sequelize.define('exam_group_exam_students',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

})

examGroupExamStudents.belongsTo(Student,{foreignKey:'student_id',targetKey:'id',onDelete:'CASCADE'})
examGroupExamStudents.belongsTo(examGroupExam,{foreignKey:'exam_group_exam_id',targetKey:'id',onDelete:'CASCADE'})

module.exports = examGroupExamStudents