const {sequelize,DataTypes} = require('../connection')

const FeeType = sequelize.define('fee_type',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  type:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  fee_category_id:{
    type:DataTypes.INTEGER,
    defaultValue:null,
    onDelete:'CASCADE'
  },
  code:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false
  },
  is_system:{
    type:DataTypes.ENUM('1','0'),
    defaultValue:'0',
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes',
    allowNull:false
  }

})

module.exports = FeeType