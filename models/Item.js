const {sequelize,DataTypes} = require('../connection')
const ItemCategory = require('../models/ItemCategory')

const Item = sequelize.define('items',{

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
  unit:{
    type:DataTypes.STRING,
    allowNull:false
  },
 
  description:{
    type:DataTypes.STRING,
    allowNull:false
  },
 
  date:{
    type:DataTypes.DATEONLY,
    allowNull:false,
    defaultValue:DataTypes.NOW
  }

})


Item.belongsTo(ItemCategory,{foreignKey:'item_category_id',targetKey:'id',onDelete:null})

Item.sync({alter:true})

module.exports= Item