const {sequelize,DataTypes} = require('../connection')
const exam_group = require('./ExamGroup')
const exam = require('./Exams')

const examGroupExam = sequelize.define('exam_group_exam',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  }
})

examGroupExam.belongsTo(exam_group,{foreignKey:'exam_group_id',targetKey:'id',onDelete:'CASCADE'})
examGroupExam.belongsTo(exam,{foreignKey:'exam_id',targetKey:'id',onDelete:'CASCADE'})

module.exports = examGroupExam