const {sequelize,DataTypes} = require('../connection')

const Routes = sequelize.define('routes',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  route:{
    type:DataTypes.STRING,
    allowNull:false
  }


})

module.exports = Routes