const {sequelize,DataTypes} = require('../connection')

const FeeGroupSession = sequelize.define('fee_session_group',{

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
      key:"id"
    },
    onDelete:'CASCADE',
    defaultValue:null
  },
  session_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'sessions',
      key:"id"
    },
    onDelete:'CASCADE',
    defaultValue:null
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }

})

module.exports = FeeGroupSession