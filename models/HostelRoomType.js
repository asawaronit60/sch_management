const {sequelize,DataTypes} = require('../connection')

const roomType = sequelize.define('room_type',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  type:{
    type:DataTypes.STRING,
    allowNull:false
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

module.exports = roomType;