const {sequelize,DataTypes} = require('../connection')

const Events = sequelize.define('front_CMS_event',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

  title:{
    type:DataTypes.STRING
  },
  venue:{
    type:DataTypes.STRING
  },
  start_date:{
    type:DataTypes.DATEONLY
  },
  end_date:{
    type:DataTypes.DATEONLY
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


module.exports = Events