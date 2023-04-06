const {sequelize,DataTypes} = require('../connection')
const expenseHead = require('../models/ExpesnseHead')

const Expense = sequelize.define('expense',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  // exp_head_id:{
  //   type:DataTypes.INTEGER,
  //   defaultValue:null
  // },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  invoice_no:{
    type:DataTypes.STRING,
    allowNull:true
  },
  // date:{
  //   type:DataTypes.DATEONLY,
  //   defaultValue:null
  // },
  amount:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  documents:{
    type:DataTypes.STRING,
    allowNull:true
  },
  note:{
    type:DataTypes.STRING,
    allowNull:true
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


Expense.belongsTo(expenseHead,{foreignKey:'expense_head_id',targetKey:'id',onDelete:null})

// Expense.sync({alter:true})

module.exports = Expense