const {sequelize,DataTypes} = require('../connection')

const ItemStore = sequelize.define('item_store',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  },
  item_store:{
    type:DataTypes.STRING,
    allowNull:false
  },
  code:{
    type:DataTypes.STRING,
    allowNull:true
  },
  description:{
    type:DataTypes.STRING,
    allowNull:true
  }
})

// ItemStore.sync({alter:true})
module.exports = ItemStore