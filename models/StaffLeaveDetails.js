const Staff = require('./Staff')
const LeaveType = require('./StaffLeaveType')
const {sequelize,DataTypes} = require('../connection')
const staffLeaveDetails = sequelize.define('staff_leave',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  alloted_leave:{
    type:DataTypes.INTEGER,
    allowNull:false
  }

})

staffLeaveDetails.belongsTo(Staff,{foreignKey:'staff_id',targetKey:'id',onDelete:'CASCADE'})
staffLeaveDetails.belongsTo(LeaveType,{foreignKey:'leave_type_id',targetKey:'id',onDelete:'CASCADE'})


module.exports = staffLeaveDetails