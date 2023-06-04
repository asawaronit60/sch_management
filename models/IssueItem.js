const {sequelize,DataTypes} = require('../connection')
const Item = require('./Item')
const ItemCategory = require('./ItemCategory')
const Staff =require('./Staff')
const UserRole = require('./UserRoles')
const IssueItem = sequelize.define('issue_item',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  issue_date:{
    type:DataTypes.DATEONLY,
    // allowNull:false
  },
  return_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  quantity:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  note:{
    type:DataTypes.STRING,
    allowNull:true
  },
  is_returned:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  }
})

IssueItem.belongsTo(Item,{foreignKey:'item_id',targetKey:'id',onDelete:'CASCADE'})
IssueItem.belongsTo(ItemCategory,{foreignKey:'item_category_id',targetKey:'id',onDelete:'CASCADE'})
IssueItem.belongsTo(Staff,{foreignKey:'issue_to', targetKey:'id',onDelete:'CASCADE',as:'issueTo'})
IssueItem.belongsTo(Staff,{foreignKey:'issue_by',targetKey:'id',onDelete:'CASCADE',as:'issueBy'})
IssueItem.belongsTo(UserRole,{foreignKey:'user_id',targetKey:'id',onDelete:null})

IssueItem.sync({alter:true})

module.exports = IssueItem