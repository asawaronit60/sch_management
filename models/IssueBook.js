const {sequelize,DataTypes} = require('../connection')
const BookList = require('./BookList')
const Student = require('./student')

const bookIssue = sequelize.define('book_issue',{


  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  due_return_date:{
    type:DataTypes.DATEONLY
  },
  issue_date:{
    type:DataTypes.DATEONLY,
    defaultValue:DataTypes.NOW
  },
  return_date:{
    type:DataTypes.DATEONLY,
    // defaultValue:DataTypes.NOW
  },
  is_returned:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  }


})

bookIssue.belongsTo(BookList,{foreignKey:'book_id',targetKey:'id',onDelete:'CASCADE'})
bookIssue.belongsTo(Student,{foreignKey:'student_id',targetKey:'id',onDelete:'CASCADE'})
// bookIssue.sync({alter:true})
module.exports = bookIssue