const {sequelize,DataTypes} = require('../connection')
const Staff = require('./Staff')

const payRoll = sequelize.define('staff_payroll',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  earnings:{
    type:DataTypes.STRING
  },
  deductions:{
    type:DataTypes.STRING
  },
  basic_salary:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  total_earnings:{
    type:DataTypes.FLOAT,
  },
  total_deductions:{
    type:DataTypes.FLOAT,
  },
  gross_salary:{
    type:DataTypes.FLOAT
  },
  tax:{
    type:DataTypes.FLOAT
  },
  month:{
    type:DataTypes.STRING,
    allowNull:false
  },
  year:{
    type:DataTypes.STRING,
    allowNull:false
  },
  net_salary:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  status:{
    type:DataTypes.STRING,
    defaultValue:'Not Generated'
  },
  payment_mode:{
    type:DataTypes.STRING
  },
  payment_date:{
    type:DataTypes.DATEONLY
  },
  note:{
    type:DataTypes.STRING
  }

})

payRoll.belongsTo(Staff,{foreignKey:'staff_id',targetKey:'id',onDelete:'CASCADE'})
Staff.hasMany(payRoll)
payRoll.sync({alter:true})

module.exports = payRoll