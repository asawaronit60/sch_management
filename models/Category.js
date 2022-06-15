const {sequelize,DataTypes} = require('../connection')

const Category = sequelize.define('category',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  category:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }

})

module.exports = Category