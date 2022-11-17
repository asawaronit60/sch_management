const {sequelize,DataTypes} = require('../connection')

const mediaManager = sequelize.define('media_manager',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

  file:{
    type:DataTypes.STRING
  },
  file_type:{
    type:DataTypes.STRING
  },
  youtube_video_url:{
    type:DataTypes.STRING
  }

})


module.exports = mediaManager