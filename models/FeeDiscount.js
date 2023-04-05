const {sequelize,DataTypes} = require('../connection')

const FeeDiscount = sequelize.define('fee_discount',{

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
    defaultValue:null,
    allowNull:true
  },
  code:{
    type:DataTypes.STRING,
    allowNull:false
  },
  amount:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes',
    allowNull:true
  }


})

// FeeDiscount.sync({alter:true})
module.exports = FeeDiscount