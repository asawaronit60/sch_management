const {sequelize,DataTypes} = require('../connection')

const FeeDiscount = sequelize.define('fee_discount',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  session_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'sessions',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  code:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  amount:{
    type:DataTypes.FLOAT,
    defaultValue:null
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes',
    allowNull:false
  }


})