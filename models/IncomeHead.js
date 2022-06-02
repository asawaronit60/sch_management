const {sequelize,DataTypes} = require('../connection')

const IncomeHead = sequelize.define('income_head',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  income_category:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  description:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  },
  is_deleted:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }
})

module.exports = IncomeHead