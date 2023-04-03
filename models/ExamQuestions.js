const {sequelize,DataTypes } = require('../connection')
const OnlineExamOuestion = require('./OnlineExamOuestions')
const OnlineExam = require('./OnlineExam')

const ExamQuestions = sequelize.define('exam_questions',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  }

})

ExamQuestions.belongsTo(OnlineExamOuestion,{foreignKey:'question_id',targetKey:'id',onDelete:'cascade'})
ExamQuestions.belongsTo(OnlineExam,{foreignKey:'online_exam_id',targetKey:'id',onDelete:'cascade'})

module.exports = ExamQuestions