const {sequelize,DataTypes} = require('../connection')

const Reference = sequelize.define('reference',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  reference:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false,
  }

})

module.exports = Reference