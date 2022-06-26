const {sequelize,DataTypes} = require('../connection')

const PaySlipAllowance = sequelize.define('payslip_allowance',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  payslip_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'staff_payslips',
      key:'id'
    },
    allowNull:false
  },
  amount:{
    type:DataTypes.FLOAT,
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
  cal_type:{
    type:DataTypes.STRING,
    allowNull:false
  }
})

module.exports = PaySlipAllowance