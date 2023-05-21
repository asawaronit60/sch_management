const {sequelize,DataTypes} = require('../connection')

const languageSetting = sequelize.define('language_setting',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  language:{
    type:DataTypes.STRING,
    allowNull:false
  },
  short_code:{
    type:DataTypes.STRING,
    allowNull:false
  },
  country_code:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.BOOLEAN
  },
  is_rtl:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  },
  active:{
    type:DataTypes.BOOLEAN
  },
  enabled:{
    type:DataTypes.INTEGER,
    defaultValue:'0'
  }


})
// .sync({alter:true})
module.exports = languageSetting