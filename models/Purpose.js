const {sequelize,DataTypes} = require('../connection')

const Purpose = sequelize.define('purpose',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  purpose:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false,
  }

})

module.exports = Purpose