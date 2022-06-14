const {sequelize,DataTypes} = require('../connection')

const BookList = sequelize.define('books',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  book_title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  book_no:{
    type:DataTypes.STRING,
    allowNull:false
  },
  isbn_no:{
    type:DataTypes.STRING,
    allowNull:false
  },
  subject:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  rack_no:{
    type:DataTypes.STRING,
    allowNull:false
  },
  publish:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  author:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  qty:{
    type:DataTypes.INTEGER,
    defaultValue:null
  },
  perunitcost:{
    type:DataTypes.FLOAT,
    defaultValue:null
  },
  postdate:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  description:{
    type:DataTypes.STRING
  },
  avaliable:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }

})

module.exports = BookList