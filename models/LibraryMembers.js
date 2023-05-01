const {sequelize,DataTypes} = require('../connection')
const Staff = require('./Staff')
const Student = require('./student')
const LibraryMembers = sequelize.define('library_members',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  library_card_no:{
    type:DataTypes.STRING,
   allowNull:false
  },
  member_type:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  // member_id:{
  //   type:DataTypes.INTEGER,
  //   defaultValue:null
  // },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    allowNull:false,
    defaultValue:'no'
  },
  // {
  //   indexes:[
  //     {
  //       unique:true,
  //       fields:['student_id','staff_id']
  //     }
  //   ]
  // }

})
LibraryMembers.belongsTo(Student,{foreignKey:'student_id',targetKey:'id',onDelete:'CASCADE'})
// Student.hasOne(LibraryMembers)
LibraryMembers.belongsTo(Staff,{foreignKey:'staff_id',targetKey:'id',onDelete:'CASCADE'})

// LibraryMembers.sync({alter:true})

module.exports = LibraryMembers