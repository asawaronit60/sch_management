const {sequelize,DataTypes} = require('../connection')
const subjectGroup = require('../models/SubjectGroup')
const Section = require('../models/Section')

const subjectGroupSection = sequelize.define('subject_group_section',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },

  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  }

})

subjectGroupSection.belongsTo(Section,{foreignKey:'section_id',targetKey:'id',onDelete:'CASCADE'})
subjectGroupSection.belongsTo(subjectGroup,{foreignKey:'subject_group_id',targetKey:'id',onDelete:'CASCADE'})

// subjectGroupSection.sync({alter:true})

module.exports = subjectGroupSection
