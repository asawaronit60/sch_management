const {sequelize,DataTypes} = require('../connection')

const TransportFeeMaster = sequelize.define('tansport_fee_master',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  month:{
    type:DataTypes.STRING
  },
  fine_type:{
    type:DataTypes.ENUM('none','percentage','fix_amount')
  },
  due_date:{
    type:DataTypes.STRING
  },
  percentage:{
    type:DataTypes.FLOAT
  },
  fix_amount:{
    type:DataTypes.FLOAT
  }

})

module.exports = TransportFeeMaster