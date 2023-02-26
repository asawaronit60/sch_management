const {sequelize,DataTypes } = require('../connection')

const exams = sequelize.define('exams',{
  
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  exams:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.ENUM('active','inactive'),
    defaultValue:'active'
  }
  

})

module.exports = exams