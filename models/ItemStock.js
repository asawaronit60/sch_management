const {sequelize,DataTypes} = require('../connection')

const itemStock = sequelize.define('stock_item',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  item_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'items',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  item_category_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'item_categories',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  supplier_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'item_suppliers',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  symbol:{
    type:DataTypes.STRING,
    defaultValue:'+',
    allowNull:false,
    
  },
  store_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'item_stores',
      key:'id'
    },
    onDelete:'CASCADE'
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
    defaultValue:null
  },
  description:{
    type:DataTypes.STRING,
    allowNull:null
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  }

})

itemStock.sync({alter:true})

module.exports = itemStock