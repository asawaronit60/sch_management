
const {sequelize,DataTypes} =require('../connection')

const Income = sequelize.define('income',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  inc_head_id:{
    type:DataTypes.STRING,
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
  note:{
    type:DataTypes.STRING
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  },
  is_deleted:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  },
  documents:{
    type:DataTypes.STRING
  }
})

module.exports = Income