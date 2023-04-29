const {sequelize,DataTypes} = require('../connection')

const Certificate = sequelize.define('certificate',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  certificate_name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  certificate_text:{
    type:DataTypes.STRING,
    allowNull:false
  },
  left_header:{
    type:DataTypes.STRING,

  },
  center_header:{
    type:DataTypes.STRING,

  },
  right_header:{
    type:DataTypes.STRING,
 
  },
  left_footer:{
    type:DataTypes.STRING,
 
  },
  right_footer:{
    type:DataTypes.STRING,
  
  },
  center_footer:{
    type:DataTypes.STRING,

  },
  background_image:{
    type:DataTypes.STRING,
   
  },
  status:{
    type:DataTypes.ENUM('active','inactive'),
    defaultValue:'active'
  },
  header_height:{
    type:DataTypes.FLOAT,
  
  },

  footer_height:{
    type:DataTypes.FLOAT,
  
  },
  body_width:{
    type:DataTypes.FLOAT,
   
  },
  body_height:{
    type:DataTypes.FLOAT,
  
  },
  enable_student_image:{
    type:DataTypes.ENUM('active','inactive'),
    defaultValue:'inactive'
  },
  photo_height:{
    type:DataTypes.FLOAT,
  }

})


// Certificate.sync({alter:true})

module.exports = Certificate