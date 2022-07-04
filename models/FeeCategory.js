const {sequelize,DataTypes} = require('../connection')

const FeeCategory = sequelize.define('fee_category',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  category:{
    type:DataTypes.STRING,
    allowNull:false
  },

  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes',
    allowNull:false
  }

})

module.exports = FeeCategory