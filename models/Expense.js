const {sequelize,DataTypes} = require('../connection')


const Expense = sequelize.define('expense',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  exp_head_id:{
    type:DataTypes.INTEGER,
    defaultValue:null
  },
  name:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  invoice_no:{
    type:DataTypes.STRING,
    allowNull:false
  },
  date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  amount:{
    type:DataTypes.FLOAT,
    defaultValue:null
  },
  documents:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  note:{
    type:DataTypes.STRING
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

module.exports = Expense