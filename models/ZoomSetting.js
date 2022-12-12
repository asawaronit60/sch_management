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
  use_teacher_api_credential:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  use_zoom__client_for_staff:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  use_zoom__client_for_student:{
    type:DataTypes.STRING,
    defaultValue:null
  }


})

// zoomSetting.sync({alter:true})

module.exports = zoomSetting