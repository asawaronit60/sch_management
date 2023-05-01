const {sequelize,DataTypes} = require('../connection')
const examGroupExam = require('./examGroupExam')
const Subject = require('./Subject')

const examGroupExamSubjects = sequelize.define('exam_group_exam_subjects',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  duration:{
    type:DataTypes.FLOAT
  },
  data:{
    type:DataTypes.DATEONLY
  },
  start_time:{
    type:DataTypes.TIME
  },
  credit_hours:{
    type:DataTypes.FLOAT
  },
  room_no:{
    type:DataTypes.STRING
  },
  max_marks:{
   type:DataTypes.FLOAT
  },
  min_marks:{
    type:DataTypes.FLOAT
  }
})

examGroupExamSubjects.belongsTo(Subject,{foreignKey:'subject_id',targetKey:'id',onDelete:'cascade'})
examGroupExamSubjects.belongsTo(examGroupExam,{foreignKey:'exam_group_exam_id',targetKey:'id',onDelete:'cascade'})
module.exports = examGroupExamSubjects