const {sequelize,DataTypes} = require('../connection')

const Gallery = sequelize.define('front_CMS_gallery',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

  title:{
    type:DataTypes.STRING
  },
  gallery_images:{
    type:DataTypes.STRING
  },
  description:{
    type:DataTypes.STRING
  },
  featured_image:{
    type:DataTypes.STRING
  },
  sidebar:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  meta_title:{
    type:DataTypes.STRING
  },
  meta_keyword:{
    type:DataTypes.STRING
  },
  meta_description:{
    type:DataTypes.STRING
  }

})


module.exports = Gallery