const { sequelize, DataTypes } = require('../connection')
const Staff = require('./Staff')
const LeaveType = require('./StaffLeaveType')

const applyLeave = sequelize.define('apply_leave', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  apply_date: {
    type:DataTypes.DATEONLY,
    defaultValue:DataTypes.NOW,
    allowNull:false
  },

  leave_from_date: {
    type:DataTypes.DATE,
    allowNull:false
  },
  leave_to_date: {
    type:DataTypes.DATE,
    allowNull:false
  },
  reason:{
    type:DataTypes.TEXT
  },
  document:{
    type:DataTypes.STRING
  },
  status:{
    type:DataTypes.STRING,
    defaultValue:'Pending'
  },
  days:{
    type:DataTypes.INTEGER,
  }

})

applyLeave.belongsTo(LeaveType,{foreignKey:'leave_type_id',targetKey:'id',onDelete:null,constraints:false})
applyLeave.belongsTo(Staff,{foreignKey:'staff_id',targetKey:'id',onDelete:'CASCADE'})

// applyLeave.sync({alter:true})

module.exports = applyLeave