const {sequelize,DataTypes} = require('../connection')
const Class = require('./Class')
const section = require('./Section')
const staff = require('./Staff')
const subject = require('./Subject')
const subjectGroup =require('./SubjectGroup')

const addAssingment = sequelize.define('add_assignment',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

  assignment_date:{
    type:DataTypes.DATEONLY,
    defaultValue:DataTypes.NOW
  },
  submission_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  document:{
    type:DataTypes.STRING
  },
  description:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  evaluation_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  }

})

addAssingment.belongsTo(Class,{foreignKey:'class_id',targetKey:'id',onDelete:'CASCADE'})
addAssingment.belongsTo(section,{foreignKey:'section_id',targetKey:'id',onDelete:'CASCADE'})
addAssingment.belongsTo(subject,{foreignKey:'subject_id',targetKey:'id',onDelete:'CASCADE'})
addAssingment.belongsTo(subjectGroup,{foreignKey:'subject_group_id',targetKey:'id',onDelete:'CASCADE'})
addAssingment.belongsTo(staff,{foreignKey:'staff_id',targetKey:'id',onDelete:null})

// addAssingment.sync({alter:true})

module.exports = addAssingment