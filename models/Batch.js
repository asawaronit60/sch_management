const {sequelize,DataTypes} = require('../connection')

const Batch = sequelize.define('batch',{
  
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
  description:{
    type:DataTypes.STRING
  },
  is_active:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }

})

module.exports = Batch