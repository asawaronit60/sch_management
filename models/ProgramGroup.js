const  {sequelize,DataTypes} = require('../connection')

const programGroup = sequelize.define('program_group',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  program_group_name:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  }
})



module.exports = programGroup