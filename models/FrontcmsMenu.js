const {sequelize,DataTypes} = require('../connection')

const Menu = sequelize.define('front_cms_menu',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  menu:{
    type:DataTypes.STRING
  },
  description:{
    type:DataTypes.STRING
  }

})

module.exports = Menu