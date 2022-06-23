const {sequelize,DataTypes} = require('../connection')

const Department = sequelize.define('department',{


  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  department_name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    allowNull:false
  }

})


module.exports = Department