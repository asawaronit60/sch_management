const {sequelize,DataTypes} = require('../connection')

const FeeGroup = sequelize.define('fee_group',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false
  },
  is_system:{
    type:DataTypes.ENUM('1','0'),
    defaultValue:'0',
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes',
    allowNull:false
  }

})

module.exports = FeeGroup