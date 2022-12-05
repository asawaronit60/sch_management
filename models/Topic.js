const {sequelize,DataTypes} = require('../connection')
const classSection = require('./ClassSections')
const subjectGroup = require('./SubjectGroup')
const subject = require('./Subject')
const lessonName = require('./LessonName')

const topic = sequelize.define('topic',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  // topics:{
  //   type:DataTypes.JSON,
  //   allowNull:false
  // },

  // status:{
  //   type:DataTypes.ENUM('')
  // }

})

topic.belongsTo(classSection,{foreignKey:'class_section_id',targetKey:'id',onDelete:'CASCADE'})
topic.belongsTo(subjectGroup,{foreignKey:'subject_group_id',targetKey:'id',onDelete:'CASCADE'})
topic.belongsTo(subject,{foreignKey:'subject_id',targetKey:'id',onDelete:'CASCADE'})
topic.belongsTo(lessonName,{foreignKey:'lesson_name_id',targetKey:'id',onDelete:'CASCADE'})

// topic.sync({alter:true})
  
module.exports = topic