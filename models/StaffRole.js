const {sequelize,DataTypes} = require('../connection')


const staffRole = sequelize.define('staff_roles',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  role_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'user_roles',
      key:'id'
    }
  },
  staff_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'staffs',
      key:'id'
    }
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    allowNull:false
  }

})

module.exports = staffRole