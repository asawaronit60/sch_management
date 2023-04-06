const {sequelize,DataTypes} = require('../connection')

const admitCardDesign = sequelize.define('admit_card_design',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

  template:{
    type:DataTypes.STRING,
  },
  heading:{
    type:DataTypes.STRING,
  },
  title:{
    type:DataTypes.STRING,
  },
  exam_name:{
    type:DataTypes.STRING,
  },
  school_name:{
    type:DataTypes.STRING,
  },
  exam_center:{
    type:DataTypes.STRING,
  },
  body_text:{
    type:DataTypes.STRING,
  },
  footer_text:{
    type:DataTypes.STRING,
  },
  printing_date:{
    type:DataTypes.STRING,
  },
  right_logo:{
    type:DataTypes.STRING,
  },
  left_sign:{
    type:DataTypes.STRING,
  },
  middle_sign:{
    type:DataTypes.STRING,
  },
  background_image:{
    type:DataTypes.STRING,
  },
  name:{
    type:DataTypes.ENUM('yes','no')
  },
  father_name:{
    type:DataTypes.ENUM('yes','no')
  },
  mother_name:{
    type:DataTypes.ENUM('yes','no')
  },
  exam_session:{
    type:DataTypes.ENUM('yes','no')
  },
  admission_no:{
    type:DataTypes.ENUM('yes','no')
  },
  division:{
    type:DataTypes.ENUM('yes','no')
  },
  name:{
    type:DataTypes.ENUM('yes','no')
  },
  roll_no:{
    type:DataTypes.ENUM('yes','no')
  },
  photo:{
    type:DataTypes.ENUM('yes','no')
  },
  class:{
    type:DataTypes.ENUM('yes','no')
  },
  section:{
    type:DataTypes.ENUM('yes','no')
  },
  date_of_birth:{
    type:DataTypes.ENUM('yes','no')
  },
  remarks:{
    type:DataTypes.ENUM('yes','no')
  },

})


module.exports = admitCardDesign