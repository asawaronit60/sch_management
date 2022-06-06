const {sequelize,DataTypes} = require('../connection')

const Class = sequelize.define('class',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  class:{
    type:DataTypes.STRING
  },
  program_code:{
    type:DataTypes.STRING
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }
})

module.exports = Class