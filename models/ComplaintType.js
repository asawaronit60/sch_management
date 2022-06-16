const {sequelize,DataTypes} = require('../connection')

const compalintType = sequelize.define('complaint_type',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  complaint_type:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false,
  }

})

module.exports = compalintType