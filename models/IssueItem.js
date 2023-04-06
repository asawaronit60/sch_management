const {sequelize,DataTypes} = require('../connection')
const Item = require('./Item')
const ItemCategory = require('./ItemCategory')
const Staff =require('./Staff')

const IssueItem = sequelize.define('issue_item',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  user_type:{
    type:DataTypes.INTEGER,
    references:{
      model:'user_roles',
      key:'id'
    },
    defaultValue:null
  },
  // issue_to:{
  //   type:DataTypes.STRING,
  //   defaultValue:null
  // },
  // issue_by:{
  //   type:DataTypes.STRING,
  //   defaultValue:null
  // },
  issue_date:{
    type:DataTypes.DATEONLY,
    allowNull:true,
    defaultValue:DataTypes.NOW
  },
  return_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  // item_category_id:{
  //   type:DataTypes.INTEGER,
  //   references:{
  //     model:'item_categories',
  //     key:'id'
  //   }
  // },
  // item_id:{
  //   type:DataTypes.INTEGER,
  //   references:{
  //     model:'items',
  //     key:'id'
  //   }
  // },
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

IssueItem.belongsTo(Item,{foreignKey:'item_id',targetKey:'id',onDelete:'CASCADE',constraints:true})
IssueItem.belongsTo(ItemCategory,{foreignKey:'item_category_id',targetKey:'id',onDelete:'CASCADE',constraints:true})
IssueItem.belongsTo(Staff,{foreignKey:'issue_to',targetKey:'id',onDelete:'CASCADE'})
IssueItem.belongsTo(Staff,{foreignKey:'issue_by',targetKey:'id',onDelete:'CASCADE'})

// IssueItem.sync({alter:true})

module.exports = IssueItem