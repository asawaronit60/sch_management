const {sequelize,DataTypes} = require('../connection');
const examType = require('./ExamType');

const marksGrade = sequelize.define('marks_grade',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  grade_name:{
    type:DataTypes.STRING
  },
  percent_upto:{
    type:DataTypes.DOUBLE,
    defaultValue:0.0
  },
  percent_from:{
    type:DataTypes.DOUBLE,
    defaultValue:0.0
  },
  grade_point:{
    type:DataTypes.DOUBLE,
    defaultValue:0.0
  },
  description:{
    type:DataTypes.STRING
  }
})

marksGrade.belongsTo(examType,{foreignKey:'exam_type_id',targetKey:'id',onDelete:'CASCADE'})

module.exports = marksGrade;