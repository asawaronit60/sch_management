const {sequelize, DataTypes} = require('../connection')

const onlineAdmission = sequelize.define('online_admission',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  student_no:{
    type:DataTypes.STRING,
    defaultValue:null,
    unique:true
  },
  id_no:{
    type:DataTypes.STRING,
    defaultValue:null,
    unique:true
  },
  admission_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  program_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
      model:'classes',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  intake_id:{
    type:DataTypes.INTEGER,
    defaultValue:null,
    references:{
      model:'sessions',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  section_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'sections',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  firstname:{
    type:DataTypes.STRING(200),
    defaultValue:null
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
    }
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
    defaultValue:null
  },
  current_address:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  permanent_address:{
    type:DataTypes.STRING(200),
    defaultValue:null
  },
  // category_id:{
  //   type:DataTypes.INTEGER,
  //   defaultValue:null
  // },
  // route_id:{
  //   type:DataTypes.INTEGER,
  //   allowNull:true
  // },
  school_house_id:{
    type:DataTypes.INTEGER,
    allowNull:true,
    references:{
      model:'student_houses',
      key:'id'
    }
  },
  blood_group:{
    type:DataTypes.STRING(10),
    allowNull:false
  },
  // vehroute_id:{
  //   type:DataTypes.INTEGER,
  //   allowNull:true
  // },
  // hostel_room_id:{
  //   type:DataTypes.INTEGER,
  //   allowNull:false
  // },
  // adhar_no:{
  //   type:DataTypes.STRING,
  //   defaultValue:null,
  //   unique:true
  // },
  // samagra_id:{
  //   type:DataTypes.STRING,
  //   defaultValue:null
  // },
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
    allowNull:false
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
    allowNull:false
  },
  mother_pic:{
    type:DataTypes.STRING(200),
    allowNull:false
  },
  gaurdian_pic:{
    type:DataTypes.STRING(200),
    allowNull:false
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
    allowNull:false
  },
  weight:{
    type:DataTypes.STRING(50),
    allowNull:false
  },
  as_on_date:{
    type:DataTypes.DATEONLY,
    allowNull:true,
    defaultValue:null
  },
disable_reason_id:{
  type:DataTypes.INTEGER,
  allowNull:true,
  references:{
    model:'disable_reasons',//disable_reasons
    key:'id'
  }
},


})


onlineAdmission.beforeCreate(function(student,options){

 return student.fullname = student.firstname+' '+student.lastname

})

module.exports = onlineAdmission