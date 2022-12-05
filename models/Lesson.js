const {sequelize,DataTypes} = require('../connection')
const classSection = require('../models/ClassSections')
const subjectGroup = require('../models/SubjectGroup')
const subject = require('../models/Subject')

const Lesson = sequelize.define('lesson',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

})

Lesson.belongsTo(classSection,{foreignKey:'class_section_id',targetKey:'id'})
Lesson.belongsTo(subjectGroup,{foreignKey:'subject_group_id',targetKey:'id',onDelete:'CASCADE'})
Lesson.belongsTo(subject,{foreignKey:'subject_id',targetKey:'id',onDelete:'CASCADE'})

//  Lesson.sync({alter:true})

module.exports = Lesson