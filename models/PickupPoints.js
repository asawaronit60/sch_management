const {sequelize,DataTypes} = require('../connection')

const pickupPoint = sequelize.define('pickup_point',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  point:{
    type:DataTypes.STRING,
    allowNull:false
  },
  latitude:{
    type:DataTypes.STRING,
    allowNull:false
  },
  longitude:{
    type:DataTypes.STRING,
    allowNull:false
  }

})

module.exports = pickupPoint