const {sequelize,DataTypes} = require('../connection')
const Class = require('./Class')
const Section = require('./Section')
const Student = require('./student')
const Staff = require('./Staff')
const approveLeave = sequelize.define('approve_leave',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  apply_date:{
    type:DataTypes.DATEONLY,
    defaultValue:DataTypes.NOW
  },
  from_date:{
    type:DataTypes.DATEONLY,
  },
  to_date:{
    type:DataTypes.DATEONLY,
  },
  reason:{
    type:DataTypes.TEXT
  },
  leave_status:{
    type:DataTypes.STRING
  },
  document:{
    type:DataTypes.STRING
  },

})


approveLeave.belongsTo(Class,{foreignKey:'class_id',targetKey:'id',onDelete:'cascade'})
approveLeave.belongsTo(Section,{foreignKey:'section_id',targetKey:'id',onDelete:'cascade'})
approveLeave.belongsTo(Student,{foreignKey:'student_id',targetKey:'id',onDelete:'cascade'})
approveLeave.belongsTo(Staff,{foreignKey:'approved_by_id',targetKey:'id',onDelete:null})

module.exports = approveLeave