const {sequelize,DataTypes} = require('../connection')
const examGroupExamSubjects = require('./examGroupExamSubjects')

const examMarks = sequelize.define('exam_marks',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  marks:{
    type:DataTypes.STRING,
    allowNull:false
  }

})

examMarks.belongsTo(examGroupExamSubjects,{foreignKey:'exam_group_exam_subject_id',targetKey:'id',onDelete:'cascade'})

module.exports = examMarks