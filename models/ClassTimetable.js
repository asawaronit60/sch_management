const {sequelize,DataTypes} = require('../connection')
const Class = require('../models/Class')
const Section = require('../models/Section')
const Staff = require('../models/Staff')
const Subject = require('../models/Subject')
const subjectGroups = require('../models/SubjectGroup')

const classTimetable = sequelize.define('class_timetable',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  day:{
    type:DataTypes.STRING
  },
  time_from:{
    type:DataTypes.STRING
  },
  time_to:{
    type:DataTypes.STRING
  },
  room_no:{
    type:DataTypes.STRING
  }

})

classTimetable.belongsTo(Class,{foreignKey:'class_id',targetKey:'id'})
classTimetable.belongsTo(Section,{foreignKey:'section_id',targetKey:'id'})
classTimetable.belongsTo(Staff,{foreignKey:'staff_id',targetKey:'id'})
classTimetable.belongsTo(Subject,{foreignKey:'subject_id',targetKey:'id'})
classTimetable.belongsTo(subjectGroups,{foreignKey:'subject_group_id',targetKey:'id'})


// classTimetable.sync({alter:true})

module.exports = classTimetable