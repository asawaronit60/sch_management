const {sequelize, DataTypes} = require('../connection')
const Class = require('./Class')
const Section = require('./Section')
const DisabledReason = require('./DisableReason')
const Session = require('./Session')
const Category = require('./Category')
const House = require('./StudentHouse')
const hostelRoom = require('./HostelRoom')
const hostel = require('./Hostel')


const Student = sequelize.define('student',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  admission_no:{
    type:DataTypes.STRING,
    allowNull:false,
    // unique:true
  },
  id_no:{
    type:DataTypes.STRING,
    defaultValue:null,
    // unique:true
  },
  admission_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  firstname:{
    type:DataTypes.STRING(200),
    allowNull:false
  },
  lastname:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  fullname:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  rte:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:null
  },
  image:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  mobileno:{
    type:DataTypes.STRING(20),
    defaultValue:null
  },
  email:{
    type:DataTypes.STRING(100),
    defaultValue:null,
    validate:{
      isEmail:true
    },
    // unique:true
  },
  note:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  religion:{
    type:DataTypes.STRING(100),
    defaultValue:null
  },
  caste:{
    type:DataTypes.STRING(100),
    defaultValue:null
  },
  dob:{
    type:DataTypes.DATE,
    defaultValue:null
  },
  gender:{
    type:DataTypes.STRING(10),
    allowNull:false
  },
  current_address:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  permanent_address:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  // school_house_id:{
  //   type:DataTypes.INTEGER,
  //   allowNull:true,
  //   references:{
  //     model:'student_houses',
  //     key:'id'
  //   }
  // },
  blood_group:{
    type:DataTypes.STRING(10),
    allowNull:true
  },
  bank_account_no:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  bank_name:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  ifsc_code:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  guardian_is:{
    type:DataTypes.STRING(20),
    allowNull:true
  },
  father_name:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  father_phone:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  father_occupation:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  mother_name:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  mother_phone:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  mother_occupation:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  gaurdian_name:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  gaurdian_phone:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  gaurdian_occupation:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  gaurdian_email:{
    type:DataTypes.STRING(100),
    allowNull:true,
    validate:{
      isEmail:true
    }
  },
  gaurdian_relation:{
    type:DataTypes.STRING(100),
    defaultValue:null
  },
  gaurdian_address:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  father_pic:{
    type:DataTypes.STRING(200),
    allowNull:true
  },
  mother_pic:{
    type:DataTypes.STRING(200),
    allowNull:true
  },
  gaurdian_pic:{
    type:DataTypes.STRING(200),
    allowNull:true
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  },
  previous_school:{
    type:DataTypes.STRING(200),
  },
  height:{
    type:DataTypes.STRING(50),
    allowNull:true
  },
  weight:{
    type:DataTypes.STRING(50),
    allowNull:true
  },
  as_on_date:{
    type:DataTypes.DATEONLY,
    allowNull:true,
    defaultValue:null
  },
  document_1_title:{
    type:DataTypes.STRING
  },
  document_1:{
    type:DataTypes.STRING
  },
  document_2_title:{
    type:DataTypes.STRING
  },
  document_2:{
    type:DataTypes.STRING
  },
  document_3_title:{
    type:DataTypes.STRING
  },
  document_3:{
    type:DataTypes.STRING
  },
  document_4_title:{
    type:DataTypes.STRING
  },
  document_4:{
    type:DataTypes.STRING
  },
})

Student.belongsTo(Class,{foreignKey:'class_id',targetKey:'id',onDelete:null,constraints:true})
Student.belongsTo(Section,{foreignKey:'section_id',targetKey:'id',onDelete:null})
Student.belongsTo(DisabledReason,{foreignKey:'disabled_reason_id',targetKey:'id',onDelete:null})
Student.belongsTo(Session,{foreignKey:'session_id',targetKey:'id',onDelete:null})
Student.belongsTo(Category,{foreignKey:'category_id',targetKey:'id',onDelete:null})
Student.belongsTo(House,{foreignKey:'house_id',targetKey:'id',onDelete:null})
Student.belongsTo(hostel,{foreignKey:'hostel_id',targetKey:'id',onDelete:null})
Student.belongsTo(hostelRoom,{foreignKey:'hostel_room_id',targetKey:'id',onDelete:null})

// Student.beforeCreate(function(student,options){

//  return student.fullname = student.firstname+' '+student.lastname

// })




//Student.sync({alter:true,logging:false})

module.exports = Student
