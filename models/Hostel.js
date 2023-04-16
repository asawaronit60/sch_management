const {sequelize,DataTypes} = require('../connection')

const hostel = sequelize.define('hostel',{

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
  type:{
    type:DataTypes.STRING,
    allowNull:false
  },
  address:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  intake:{
    type:DataTypes.INTEGER,
    defaultValue:null
  },
  description:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  active:{
    type:DataTypes.STRING,
    defaultValue:'active'
  }

})


module.exports = hostel;