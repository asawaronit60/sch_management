const {sequelize,DataTypes} = require('../connection')
const classSections = require('../models/ClassSections')
const Staff = require('../models/Staff')

const classTeachers = sequelize.define('class_teacher',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  }


})

classTeachers.belongsTo(classSections,{foreignKey:'class_section_id',targetKey:'id',onDelete:'CASCADE'})
classTeachers.belongsTo(Staff,{foreignKey:'staff_id',targetKey:'id',onDelete:'CASCADE'})

module.exports = classTeachers