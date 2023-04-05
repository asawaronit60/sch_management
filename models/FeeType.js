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
  code:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:true
  },
  is_system:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  }

})

FeeType.sync({alter:true})

module.exports = FeeType