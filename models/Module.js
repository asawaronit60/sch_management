const {sequelize,DataTypes} = require('../connection')

const Module = sequelize.define('module',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  code:{
    type:DataTypes.STRING,
    allowNull:false
  },
  type:{
    type:DataTypes.STRING,
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }

})

module.exports = Module