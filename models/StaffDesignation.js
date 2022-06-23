const {sequelize,DataTypes} = require('../connection')


const StaffDesignation = sequelize.define('staff_designation',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  designation:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    allowNull:false
  }

})

module.exports = StaffDesignation