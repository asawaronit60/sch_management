const {sequelize,DataTypes} = require('../connection')
const Subject = require('./Subject')
const Class = require('./Class')
const Section = require('./Section')
const Staff = require('./Staff')

const onlineExam = sequelize.define('online_exam_questions',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  question_type:{
    type:DataTypes.ENUM('single_choice','multiple_choice','true_false','descriptive')
  },
  question_level:{
    type:DataTypes.ENUM('easy','medium','hard'),
    defaultValue:'easy'
  },
  question:{
    type:DataTypes.TEXT
  },
  option_a:{
    type:DataTypes.STRING
  },
  option_b:{
    type:DataTypes.STRING
  },
  option_c:{
    type:DataTypes.STRING
  },
  option_d:{
    type:DataTypes.STRING
  },
  option_e:{
    type:DataTypes.STRING
  },
  answer_single:{
    type:DataTypes.ENUM('a','b','c','d','e')
  },
  answer_multiple:{
    type:DataTypes.JSON
  },
  answer_true_false:{
    type:DataTypes.BOOLEAN
  }

})

onlineExam.belongsTo(Subject,{foreignKey:'subject_id',targetKey:'id',onDelete:'cascade'})
onlineExam.belongsTo(Class,{foreignKey:'class_id',targetKey:'id',onDelete:'cascade'})
onlineExam.belongsTo(Section,{foreignKey:'section_id',targetKey:'id',onDelete:'cascade'})
onlineExam.belongsTo(Staff,{foreignKey:'created_by_id',targetKey:'id',onDelete:'cascade'})

// onlineExam.sync({alter:true})

module.exports = onlineExam