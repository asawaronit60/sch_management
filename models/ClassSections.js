const {sequelize,DataTypes} = require('../connection')
const Class = require('../models/Class')
const Section = require('../models/Section')
const classSection = sequelize.define('class_section',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }
})

classSection.belongsTo(Class,{foreignKey:'class_id',targetKey:'id'})
classSection.belongsTo(Section,{foreignKey:'section_id',targetKey:'id'})

module.exports = classSection