const {sequelize,DataTypes } = require('../connection')

const examType = sequelize.define('exam_type',{
  
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  exam_type:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.ENUM('active','inactive'),
    defaultValue:'active'
  }
  

})

module.exports = examType