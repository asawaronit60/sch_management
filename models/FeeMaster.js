const {sequelize,DataTypes} = require('../connection')

const FeeMaster = sequelize.define('fee_master',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  fee_group_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'fee_groups',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  fee_type_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'fee_types',
      key:'id'
    },
    onDelete:'CASCADE'
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

module.exports = FeeMaster