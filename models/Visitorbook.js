const {sequelize,DataTypes} = require('../connection')

const visitosBook = sequelize.define('visitors_book',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  source:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  purpose:{
    type:DataTypes.STRING,
    allowNull:false
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      isEmail:true
    }
  },
  contact:{
    type:DataTypes.STRING,
    allowNull:false
  },
  id_proof:{
    type:DataTypes.STRING,
    allowNull:false
  },
  no_of_people:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  date:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  in_time:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  out_time:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  note:{
    type:DataTypes.STRING,
    allowNull:false
  },
  image:{
    type:DataTypes.STRING,
    allowNull:false
  }

})



module.exports = visitosBook;