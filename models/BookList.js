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
    allowNull:true
  },
  isbn_no:{
    type:DataTypes.STRING,
    allowNull:true
  },
  subject:{
    type:DataTypes.STRING,
    allowNull:true
  },
  rack_no:{
    type:DataTypes.STRING,
    allowNull:true
  },
  publish:{
    type:DataTypes.STRING,
    allowNull:true
  },
  author:{
    type:DataTypes.STRING,
    allowNull:true
  },
  qty:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  perunitcost:{
    type:DataTypes.FLOAT,
    allowNull:true
  },
  postdate:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:true
  },
  avaliable:{
    type:DataTypes.INTEGER
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  }

})

// BookList.sync({alter:true})
module.exports = BookList