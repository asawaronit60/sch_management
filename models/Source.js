const {sequelize,DataTypes} = require('../connection')

const Source = sequelize.define('source',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  source:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false,
  }

})

module.exports = Source