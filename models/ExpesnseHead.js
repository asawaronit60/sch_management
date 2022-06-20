const {sequelize,DataTypes} = require('../connection')


const ExpenseHead = sequelize.define('expense_head',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  exp_category:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  description:{
    type:DataTypes.STRING,
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

module.exports = ExpenseHead