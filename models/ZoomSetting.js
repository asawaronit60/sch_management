const {sequelize,DataTypes} = require('../connection')

const zoomSetting = sequelize.define('zoom_setting',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  zoom_api_key:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  zoom_api_secret:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  use_teacher_api:{
    type:DataTypes.INTEGER,
    defaultValue:1
  },
  use_zoom_app:{
    type:DataTypes.INTEGER,
    defaultValue:1
  }


})

module.exports = zoomSetting