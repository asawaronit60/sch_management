const {sequelize,DataTypes} = require('../connection')


const payRoll = sequelize.define('staff_payroll',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  basic_sallary:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  pay_scale:{
    type:DataTypes.STRING,
    allowNull:false
  },
  grade:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    allowNull:false
  }

})

module.exports = payRoll