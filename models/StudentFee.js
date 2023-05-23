const {sequelize,DataTypes} = require('../connection')
const FeeMaster = require('./FeeMaster')
const Student = require('./student')

const studentFee = sequelize.define('student_fee',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  }


})

studentFee.belongsTo(Student,{foreignKey:'student_id',targetKey:'id',onDelete:'CASCADE'})
studentFee.belongsTo(FeeMaster,{foreignKey:'fee_master_id',targetKey:'id',onDelete:'CASCADE'})

module.exports = studentFee