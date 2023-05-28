const {sequelize,DataTypes} = require('../connection')

const transportRoute = sequelize.define('transport_route',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  route_title:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  no_of_vehicle:{
    type:DataTypes.INTEGER,
    defaultValue:null
  },
  fare:{
    type:DataTypes.FLOAT,
    defaultValue:null
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  note:{
    type:DataTypes.STRING,
  }

})

module.exports = transportRoute