const {sequelize,DataTypes} = require('../connection')


const Class = sequelize.define('class',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  class:{
    type:DataTypes.STRING,
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }
})


// Class.sync({alter:true})

module.exports = Class