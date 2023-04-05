
const {sequelize,DataTypes} =require('../connection')
const incomeHead = require('../models/IncomeHead')

const Income = sequelize.define('income',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  // inc_head_id:{
  //   type:DataTypes.STRING,
  //   defaultValue:null
  // },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  invoice_no:{
    type:DataTypes.STRING,
    allowNull:false
  },
  amount:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  date:{
    type:DataTypes.DATEONLY,
    defaultValue:DataTypes.NOW,
    allowNull:false
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
  },
  documents:{
    type:DataTypes.STRING,
    defaultValue:null
  }
})


Income.belongsTo(incomeHead, {foreignKey:'income_head_id',targetKey:'id',onDelete:null})

// Income.sync({alter:true})

module.exports = Income