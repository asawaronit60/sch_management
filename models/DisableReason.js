const {sequelize,DataTypes} = require('../connection')


const DisableReason = sequelize.define('disable_reason',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  reason:{
    type:DataTypes.STRING,
    allowNull:false
  }

})

module.exports = DisableReason