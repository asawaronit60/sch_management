const {sequelize,DataTypes} = require('../connection')

const Pages = sequelize.define('front_CMS_pages',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

  title:{
    type:DataTypes.STRING
  },
  page_type:{
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


module.exports = Pages