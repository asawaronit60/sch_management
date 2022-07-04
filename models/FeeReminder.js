const {sequelize,DataTypes} = require('../connection')

const FeeReminder = sequelize.define('fee_reminder',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  remainder_type:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  day:{
    type:DataTypes.INTEGER,
    defaultValue:null
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes',
    allowNull:false
  }

})

module.exports = FeeReminder