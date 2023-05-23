const {sequelize,DataTypes} = require('../connection')
const Role = require('../models/UserRoles')
const Department = require('../models/Department')
const staffDesignation = require('../models/StaffDesignation')
const DisableReason = require('./DisableReason')
const LeaveType = require('./StaffLeaveType')

const Staff = sequelize.define('staff',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  staff_id:{
    type:DataTypes.STRING
  },
  name:{
    type:DataTypes.STRING(200),
    allowNull:false
  },
  surname:{
    type:DataTypes.STRING(200),
    allowNull:false
  },
  father_name:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  mother_name:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  contact_no:{
    type:DataTypes.STRING(100),
    // allowNull:false
  },
  emergency_contact_no:{
    type:DataTypes.STRING(100),
    // allowNull:false
  },
  email:{
    type:DataTypes.STRING(100),
    allowNull:false,
    validate:{
      isEmail:true
    }
  },
  dob:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  martial_status:{
    type:DataTypes.STRING(20),
    // allowNull:false
  },
  date_of_joining:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  date_of_leaving:{
    type:DataTypes.DATEONLY,
    // allowNull:false
  },
  local_address:{
    type:DataTypes.STRING,
    // allowNull:false
  },
  permanent_address:{
    type:DataTypes.STRING,
    // allowNull:false
  },
  // qualification:{
  //   type:DataTypes.STRING
  // },
  // work_experience:{
  //   type:DataTypes.STRING
  // },
  // pan_number:{
  //   type:DataTypes.STRING,
  //   allowNull:false
  // },
  
  note:{ 
    type:DataTypes.STRING(200),
  },
  image:{
    type:DataTypes.STRING(200),
  },
  password:{
    type:DataTypes.STRING(200),
  },
  gender:{
    type:DataTypes.STRING(20),
    allowNull:false
  },
  account_title:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  bank_account_no:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  bank_name:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  ifsc_code:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  branch_name:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  payscale:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  basic_salary:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  epf_no:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  contract_type:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  shift:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  location:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  facebook:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  instagram:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  linkedin:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  twitter:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  resume:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  joining_letter:{
    type:DataTypes.STRING(200),
   //  allowNull:false
  },
  resignation_letter:{
    type:DataTypes.STRING(200),
   //  allowNull:false
  },
  other_document_name:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  other_document_file:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  user_id:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'yes'
  },
  verification_code:{
    type:DataTypes.STRING(200),
    // allowNull:false
  },
  zoom_api_key:{
    type:DataTypes.STRING(200),
    // defaultValue:null
  },
  zoom_api_secret:{
    type:DataTypes.STRING(200),
   //  defaultValue:null
  },
  // disable_reason_id:{
  //   type:DataTypes.INTEGER,
  //   allowNull:true,
  //   references:{
  //     model:'disable_reasons',//disable_reasons
  //     key:'id'
  //   }
  // }

})

Staff.belongsTo(Role,{foreignKey:'role_id',targetKey:'id',onDelete:null})
Staff.belongsTo(Department,{foreignKey:'department_id',targetKey:'id',onDelete:null})
Staff.belongsTo(staffDesignation,{foreignKey:'designation_id',targetKey:'id',onDelete:null})
Staff.belongsTo(DisableReason,{foreignKey:'disable_reason_id',targetKey:'id',onDelete:null})
// Staff.sync({alter:true})

module.exports = Staff