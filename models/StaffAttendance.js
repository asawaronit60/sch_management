const {sequelize,DataTypes} = require('../connection')
const Staff = require('./Staff')

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
  note:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  attendence:{
    type:DataTypes.ENUM('Present','Absent','Late','Half-Day'),
    defaultValue:'Present'
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  },
  is_holiday:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  }
})

staffAttendance.belongsTo(Staff,{foreignKey:'staff_id',targetKey:'id',onDelete:'CASCADE'})

// staffAttendance.sync({alter:true})
module.exports = staffAttendance