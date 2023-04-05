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
    allowNull:true,
    validate:{
      isEmail:true
    }
  },
  contact:{
    type:DataTypes.STRING,
    allowNull:true
  },
  id_proof:{
    type:DataTypes.STRING,
    allowNull:true
  },
  no_of_people:{
    type:DataTypes.INTEGER,
    allowNull:true
  },
  date:{
    type:DataTypes.DATEONLY,
    allowNull:false,
    defaultValue:DataTypes.NOW
  },
  in_time:{
    type:DataTypes.STRING,
    allowNull:true,
  },
  out_time:{
    type:DataTypes.STRING,
    allowNull:true,
  },
  note:{
    type:DataTypes.STRING,
    allowNull:true
  },
  image:{
    type:DataTypes.STRING,
    allowNull:true
  }

})

// visitosBook.sync({alter:true})

module.exports = visitosBook;