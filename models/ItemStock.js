const {sequelize,DataTypes} = require('../connection')
const item = require('./Item')
const itemCategory = require('./ItemCategory')
const supplier = require('./ItemSupplier')
const store = require('./ItemStore')

const itemStock = sequelize.define('stock_item',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  symbol:{
    type:DataTypes.STRING,
    allowNull:true
  },
  quantity:{
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0
  },
  purchase_price:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  date:{
    type:DataTypes.DATEONLY,
    allowNull:false,
    defaultValue:DataTypes.NOW
  },
  attachment:{
    type:DataTypes.STRING,
    allowNull:true
  },
  description:{
    type:DataTypes.STRING,
    allowNull:true
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  }

})

// itemStock.beforeCreate((itemS,options)=>{
//   return itemS.quantity = Number(itemS.quantity)
// })

itemStock.belongsTo(item,{foreignKey:'item_id',targetKey:'id',onDelete:null})
itemStock.belongsTo(itemCategory,{foreignKey:'item_category_id',targetKey:'id',onDelete:null})
itemStock.belongsTo(supplier,{foreignKey:'supplier_id',targetKey:'id',onDelete:null})
itemStock.belongsTo(store,{foreignKey:'store_id',targetKey:'id',onDelete:null})

// itemStock.sync({alter:true})

module.exports = itemStock