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
    allowNull:true
  },
  is_system:{
    type:DataTypes.ENUM('1','0'),
    defaultValue:'0'
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  }

})

FeeGroup.sync({alter:true})
module.exports = FeeGroup