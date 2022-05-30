const {sequelize,DataTypes} = require('../connection')

const StudentCategory  = sequelize.define('student_house',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  category:{
    type:DataTypes.STRING,
    allowNull:false
  }
})

module.exports = StudentCategory