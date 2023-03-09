const {sequelize,DataTypes } = require('../connection')
const examType = require('./ExamType')

const exam_group = sequelize.define('exam_group',{
  
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING
  },
  status:{
    type:DataTypes.ENUM('active','inactive'),
    defaultValue:'active'
  }
  

})

exam_group.belongsTo(examType,{foreignKey:'exam_type_id',targetKey:'id',onDelete:'CASCADE'})

module.exports = exam_group