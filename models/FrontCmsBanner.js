const {sequelize,DataTypes } =require('../connection')

const Banner = sequelize.define('front_cms_banner',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  image:{
    type:DataTypes.STRING
  }

})

module.exports = Banner