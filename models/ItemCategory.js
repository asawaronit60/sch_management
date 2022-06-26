const {sequelize,DataTypes} = require('../connection')

const ItemCategory = sequelize.define('item_category',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  },
  item_category:{
    type:DataTypes.STRING,
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes',
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false
  }
})

module.exports = ItemCategory