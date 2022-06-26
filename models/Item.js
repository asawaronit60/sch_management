const {sequelize,DataTypes} = require('../connection')

const Item = sequelize.define('items',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  item_category_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'item_categories',
      key:'id',
    }
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  unit:{
    type:DataTypes.STRING,
    allowNull:false
  },
  // item_photo:{
  //   type:DataTypes.STRING,
  //   allowNull:true,
  //   defaultValue:null
  // },
  description:{
    type:DataTypes.STRING,
    allowNull:false
  },
  // item_store_id:{
  //   type:DataTypes.INTEGER,
  //   references:{
  //     model:'item_stores',
  //     key:'id'
  //   }
  // },
  // item_supplier_id:{
  //   type:DataTypes.INTEGER,
  //   references:{
  //     model:'item_suppliers',
  //     key:'id'
  //   }
  // },
  quantity:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  date:{
    type:DataTypes.DATEONLY,
    allowNull:false,
    defaultValue:DataTypes.NOW
  }

})

module.exports= Item