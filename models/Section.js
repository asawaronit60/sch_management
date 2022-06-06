const {sequelize,DataTypes} = require('../connection')

const Section = sequelize.define('section',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  section:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  intake_name:{
    type:DataTypes.STRING,
    defaultValue:null
  }
})

module.exports = Section