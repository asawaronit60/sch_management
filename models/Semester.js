const {sequelize,DataTypes} = require('../connection')

const Semester = sequelize.define('semester',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  },
  semester:{
    type:DataTypes.INTEGER,
    defaultValue:null
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    allowNull:false,
    defaultValue:'yes'
  }

})

module.exports = Semester