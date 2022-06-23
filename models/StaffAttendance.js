const {sequelize,DataTypes} = require('../connection')


const staffAttendance = sequelize.define('staff_attendance',{


  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

  date:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  staff_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'staffs',
      key:'id'
    },
    allowNull:false
  },
  staff_attendance_type_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'staff_attendance_types',
      key:'id'
    },
  },
  remark:{
    type:DataTypes.STRING,
    allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    allowNull:false
  }

})

module.exports = staffAttendance