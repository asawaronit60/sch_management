const {sequelize,DataTypes} = require('../connection')


const leaveType = sequelize.define('leave_type',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  type:{
    type:DataTypes.STRING,
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    allowNull:true,
    defaultValue:'yes'
  }

})

// leaveType.sync({alter:true})
module.exports = leaveType