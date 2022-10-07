const {sequelize , DataTypes} = require('../connection')

const feeGroupCode = sequelize.define('fee_group_code',{

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
  fees_code:{
    type:DataTypes.STRING,
    defaultValue:null
  }

})


module.exports = feeGroupCode