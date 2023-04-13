const {sequelize,DataTypes} = require('../connection')
const Subject = require('../models/Subject')
const subjectGroup = require('../models/SubjectGroup')

const subjectGroupSubjects = sequelize.define('subject_group_subject',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  }


})

subjectGroupSubjects.belongsTo(Subject,{foreignKey:'subject_id',targetKey:'id',onDelete:'CASCADE'})
subjectGroupSubjects.belongsTo(subjectGroup,{foreignKey:'subject_group_id',targetKey:'id',onDelete:'CASCADE'})

// subjectGroupSubjects.sync({alter:true})

module.exports = subjectGroupSubjects