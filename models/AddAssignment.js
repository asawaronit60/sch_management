const {sequelize,DataTypes} = require('../connection')
const Class = require('./Class')
const section = require('./Section')
const staff = require('./Staff')
const subject = require('./Subject')
const subjectGroup =require('./SubjectGroup')

const addAssingment = sequelize.define('add_homework',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

  homework_date:{
    type:DataTypes.DATEONLY,
    defaultValue:DataTypes.NOW
  },
  submission_date:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  document:{
    type:DataTypes.STRING
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false
  },
  max_marks:{
    type:DataTypes.INTEGER
  },
  evaluation_date:{
    type:DataTypes.DATEONLY
  }

})

addAssingment.belongsTo(Class,{foreignKey:'class_id',targetKey:'id',onDelete:'CASCADE'})
addAssingment.belongsTo(section,{foreignKey:'section_id',targetKey:'id',onDelete:'CASCADE'})
addAssingment.belongsTo(subject,{foreignKey:'subject_id',targetKey:'id',onDelete:'CASCADE'})
addAssingment.belongsTo(subjectGroup,{foreignKey:'subject_group_id',targetKey:'id',onDelete:'CASCADE'})
addAssingment.belongsTo(staff,{foreignKey:'created_by_id',targetKey:'id',onDelete:null})

// addAssingment.sync({alter:true})

module.exports = addAssingment