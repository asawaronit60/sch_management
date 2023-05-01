const { DATE } = require('sequelize')
const {sequelize,DataTypes} = require('../connection')
const { all } = require('../routes/admissionEnquiry')

const examDivision = sequelize.define('exam_division',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  division_name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  percent_from:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  percent_upto:{
    type:DataTypes.FLOAT,
    allowNull:false
  }

})

module.exports = examDivision