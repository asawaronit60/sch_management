const {sequelize,DataTypes} = require('../connection')

const StaffRating = sequelize.define('staff_rating',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  staff_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'staffs',
      key:'id'
    }
  },
  comment:{ 
    type:DataTypes.STRING,
    allowNull:false
  },
  rate:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  user_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'users',
      key:'id'
    }
  },
  role:{
    type:DataTypes.STRING,
    allowNull:false
  },
  role_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'staff_roles',
      key:'id'
    },
    allowNull:true
  },
  status:{
    type:DataTypes.INTEGER,
    allowNull:false
  }

})

module.exports = StaffRating