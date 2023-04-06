const {sequelize,DataTypes} = require('../connection')

const ItemSupplier = sequelize.define('item_supplier',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  },
  item_supplier:{
    type:DataTypes.STRING,
    allowNull:false
  },
  phone:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false
  },
  address:{
    type:DataTypes.STRING,
    allowNull:true
  },
  contact_person_name:{
    type:DataTypes.STRING,
    allowNull:true
  },
  contact_person_phone:{
    type:DataTypes.STRING,
    allowNull:true
  },
  contact_person_email:{
    type:DataTypes.STRING,
    allowNull:true
  },
  description:{
    type:DataTypes.STRING,
    allowNull:true
  }
})

// ItemSupplier.sync({alter:true})
module.exports = ItemSupplier