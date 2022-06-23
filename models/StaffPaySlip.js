const {sequelize,DataTypes} = require('../connection')

const StaffPaySlip = sequelize.define('staff_payslip',{

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
  basic:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  total_allowance:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  total_deduction:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  leave_deduction:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  tax:{
    type:DataTypes.STRING,
    allowNull:false
  },
  net_salary:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  status:{
    type:DataTypes.STRING,
    allowNull:false
  },
  month:{
    type:DataTypes.STRING,
    allowNull:false
  },
  year:{
    type:DataTypes.STRING,
    allowNull:false
  },
  payment_mode:{
    type:DataTypes.STRING,
    allowNull:false
  },
  payment_date:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  remark:{
    type:DataTypes.STRING,
    allowNull:false
  }


})

module.exports = StaffPaySlip