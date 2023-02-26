const {sequelize,DataTypes} = require('../connection')
const feeMaster = require('./FeeMaster')
const feeDiscount = require('./FeeDiscount')
const Student = require('./student')
const Session = require('./Session')
const feeCollect = sequelize.define('collect_fee',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  status:{
    type:DataTypes.STRING,
    defaultValue:'unpaid'
  },
  mode:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  payment_id:{
    type:DataTypes.STRING,
    defaultValue:null,
  },
  fine:{
    type:DataTypes.FLOAT,
    defaultValue:0.0
  },
  paid:{
    type:DataTypes.FLOAT,
    defaultValue:0.0
  },
  balance:{
    type:DataTypes.FLOAT,
    defaultValue:0.0
  }


})

feeCollect.belongsTo(feeMaster,{foreignKey:'fee_master_id',targetKey:'id'})
feeCollect.belongsTo(feeDiscount,{foreignKey:'discount_id',targetKey:'id',})
feeCollect.belongsTo(Session,{foreignKey:'session_id',targetKey:'id'})
feeCollect.belongsTo(Student,{foreignKey:'student_id',targetKey:'id'})



module.exports = feeCollect