const {sequelize , DataTypes} = require('../connection')

const feeGroupType = sequelize.define('fee_group_type',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  fee_type_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'fee_types',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  fee_master_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'fee_masters',
      key:'id'
    },
    onDelete:'CASCADE'
  }

})

module.exports = feeGroupType