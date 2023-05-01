const {sequelize,DataTypes} = require('../connection')

const BookIssue = sequelize.define('book_issue',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  book_id:{
    type:DataTypes.INTEGER,
    defaultValue:null
  },
  due_return_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  return_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  issue_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  is_returned:{
    type:DataTypes.INTEGER,
    defaultValue:0
  },
  member_id:{
    type:DataTypes.INTEGER,
    defaultValue:null
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no',
    allowNull:false
  }
})

// module.exports = BookIssue