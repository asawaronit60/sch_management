const {sequelize,DataTypes} = require('../connection')
const student = require('./student')
const hostel = require('./Hostel')
const hostelRoom = require('./HostelRoom')

const studentHostel = sequelize.define('student_hostel',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
  }

})

studentHostel.belongsTo(student,{foreignKey:'student_id',targetKey:'id',onDelete:'CASCADE'})
studentHostel.belongsTo(hostel,{foreignKey:'hostel_id',targetKey:'id',onDelete:'CASCADE'})
studentHostel.belongsTo(hostelRoom,{foreignKey:'hostel_room_id',targetKey:'id',onDelete:'CASCADE'})

module.exports = studentHostel