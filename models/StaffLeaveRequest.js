const {sequelize,DataTypes} = require('../connection')
const moment = require('moment')

const staffLeaveRequest = sequelize.define('staff_leave_request',{

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
    },
    allowNull:false
  },
  leave_type_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'leave_types',
      key:'id'
    },
    allowNull:false
  },
  leave_from:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  leave_to:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  leave_days:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  employee_remark:{
    type:DataTypes.STRING,
    allowNull:false
  },
  admin_remark:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.STRING,
    allowNull:false
  },
  applied_by:{
    type:DataTypes.STRING,
    allowNull:false
  },
  document_file:{
    type:DataTypes.STRING,
    allowNull:false
  },
  date:{
    type:DataTypes.DATEONLY,
    defaultValue:DataTypes.NOW
  }

})

staffLeaveRequest.beforeSave(async(staffLeaveRequest,options)=>{

let a = moment(staffLeaveRequest.leave_to.split('/').reverse())
let b = moment(staffLeaveRequest.leave_from.split('/').reverse())

staffLeaveRequest.leave_days = a.diff(b,'days')
  

})

module.exports  = staffLeaveRequest