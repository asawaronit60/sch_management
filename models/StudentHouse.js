const {sequelize,DataTypes} = require('../connection')

const HouseName = sequelize.define('student_house',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:true
  }

})
// HouseName.sync({alter:true,logging:false})
module.exports = HouseName