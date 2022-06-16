const { DATE } = require('sequelize')
const {sequelize,DataTypes} = require('../connection')
const { all } = require('../routes/admissionEnquiry')

const UserRole = sequelize.define('user_role',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  slug:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  is_active:{
    type:DataTypes.INTEGER,
    defaultValue:0
  },
  is_superadmin:{
    type:DataTypes.INTEGER,
    defaultValue:0,
    allowNull:false
  },
    is_system:{
    type:DataTypes.INTEGER,
    defaultValue:0,
    allowNull:false
  }
})

module.exports = UserRole