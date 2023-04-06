const {sequelize,DataTypes} = require('../connection')

const Subjects = sequelize.define('subject',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  code:{
    type:DataTypes.STRING,
    allowNull:true
  },
  type:{
    type:DataTypes.STRING,
    allowNull:true
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  }

})

// Subjects.sync({alter:true})

module.exports = Subjects