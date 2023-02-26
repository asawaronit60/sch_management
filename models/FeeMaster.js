const {sequelize,DataTypes} = require('../connection')
const feeGroup = require('./FeeGroup')
const feeType = require('./FeeType')
const Class = require('./Class')
const Session = require('./Session')

const FeeMaster = sequelize.define('fee_master',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  amount:{
    type:DataTypes.FLOAT,
    defaultValue:0.0
  },
  due_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  fine_type:{
    type:DataTypes.ENUM('none','percentage','fix amount'),
    defaultValue:'none'
  },
  percentage:{
    type:DataTypes.FLOAT,
    defaultValue:null
  },
  fine_amount:{
    type:DataTypes.FLOAT,
    defaultValue:null
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes',
    allowNull:false
  }

})

FeeMaster.belongsTo(feeGroup,{foreignKey:'fee_group_id',targetKey:'id',onDelete:'CASCADE'})
FeeMaster.belongsTo(feeType,{foreignKey:'fee_type_id',targetKey:'id',onDelete:'CASCADE'})
FeeMaster.belongsTo(Class,{foreignKey:'class_id',targetKey:'id',onDelete:null})
FeeMaster.belongsTo(Session,{foreignKey:'session_id',targetKey:'id',onDelete:null})

// FeeMaster.sync({alter:true})

module.exports = FeeMaster