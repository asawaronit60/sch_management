const e = require('express')
const {sequelize,DataTypes} = require('../connection')
const Session = require('./Session')


exports.generalSetting = sequelize.define('general_setting',{
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
  address:{
    type:DataTypes.STRING,
    allowNull:false
  },
  school_code:{
    type:DataTypes.STRING,
    allowNull:false
  },
  phone:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      isEmail:true
    }
  },
  session_start_month:{
    type:DataTypes.STRING,
  },
  week_start_date:{
    type:DataTypes.STRING
  },
  date_time_format:{
    type:DataTypes.ENUM(
      'dd-mm-yyyy','dd-mmm-yyyy','dd/mm/yyyy','dd.mm.yyyy',
      'mm-dd-yyyy','mm/dd/yyyy','mm.dd.yyyy','yyyy/mm/dd'
    )
  },
  timezone:{
    type:DataTypes.STRING,
  },
  currency_format:{
      type:DataTypes.STRING,
  },
  file_base_url:{
    type:DataTypes.STRING
  },
  file_upload_path:{
    type:DataTypes.STRING
  },
  maintenance_mode:{
    type:DataTypes.ENUM('enabled','disabled')
  },

  print_logo:{
    type:DataTypes.STRING
  },
  admin_logo:{
    type:DataTypes.STRING
  },
  admin_small_logo:{
    type:DataTypes.STRING
  },
  app_logo:{
    type:DataTypes.STRING
  },
  user_login_background_page:{
    type:DataTypes.STRING
  },
  admin_login_background_page:{
    type:DataTypes.STRING
  }
})

.afterSync(()=>{

  this.generalSetting.findByPk(1).then(async(resp)=>{

    if(!resp)
    await this.generalSetting.create({

      name:'School Name',
      address:'School Address',
      school_code:'School Code',
      phone:'88988889859',
      email:'schoolemail@gmail.com',
      session_start_month:'April',
      week_start_date:'Monday',
      date_time_format:'dd-mm-yyyy',
      session_id:null,
      timezone:null,
      currency_format:null,
      file_base_url:null,
      file_upload_path:null,
      maintenance_mode:'disabled',  
      print_logo:null,
      admin_logo:null,
      admin_small_logo:null,
      app_logo:null,
      user_login_background_page:null,
      admin_login_background_page:null
    
    

    })
    

  })

})

this.generalSetting.belongsTo(Session,{foreignKey:'session_id',targetKey:'id',onDelete:null})


exports.studentGaurdianPannel = sequelize.define('student_gaurdian_pannel_setting',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  student_login:{
    type:DataTypes.BOOLEAN
  },
  parent_login:{
    type:DataTypes.BOOLEAN
  },

  additional_username_option_for_student_login_admission_no:{
    type:DataTypes.BOOLEAN
  },
  additional_username_option_for_student_login_mobile_no:{
    type:DataTypes.BOOLEAN
  },
  additional_username_option_for_student_login_email:{
    type:DataTypes.BOOLEAN
  },
  additional_username_option_for_parent_login_email:{
    type:DataTypes.BOOLEAN
  },
  additional_username_option_for_parent_login_mobile_no:{
    type:DataTypes.BOOLEAN
  },
  allow_student_to_add_timeline:{
    type:DataTypes.ENUM('enable','disable')
  }

})
.afterSync(()=>{

  this.studentGaurdianPannel.findByPk(1).then(async(resp)=>{

    if(!resp)
    await this.studentGaurdianPannel.create({
      student_login:true,
      parent_login:true,
      additional_username_option_for_student_login_admission_no:false,
      additional_username_option_for_student_login_mobile_no:false,
      additional_username_option_for_student_login_email:false,
      additional_username_option_for_parent_login_email:false,
      additional_username_option_for_parent_login_mobile_no:false,
      allow_student_to_add_timeline:'disable'
    })


  })


})


exports.feeSetting = sequelize.define('fee_setting',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  offline_bank_payment_in_student_portal:{
    type:DataTypes.ENUM('enable','disable')
  },
  offline_bank_payment_instruction:{
      type:DataTypes.STRING
  },
  lock_student_pannel:{
    type:DataTypes.ENUM('enable','disable')
  },
  carry_forward_fee_due_days:{
    type:DataTypes.INTEGER
  },
  single_page_fee_print:{
    type:DataTypes.ENUM('enable','disable')
  },
  collect_fee_in_back_date:{
    type:DataTypes.ENUM('enable','disable')
  },
  fee_recipt_for_office_copy:{
    type:DataTypes.BOOLEAN
  },
  fee_recipt_for_bank_copy:{
    type:DataTypes.BOOLEAN
  },
  fee_recipt_for_student_copy:{
    type:DataTypes.BOOLEAN
  }

})
.afterSync(()=>{

  this.feeSetting.findByPk(1).then(async(resp)=>{

    if(!resp)
    await this.feeSetting.create({

  offline_bank_payment_in_student_portal:'disable',
  offline_bank_payment_instruction:'Offline mode of payment are cash , DD ,cheques and online',
  lock_student_pannel:'disable',
  carry_forward_fee_due_days:60,
  single_page_fee_print:'disable',
  collect_fee_in_back_date:'disable',
  fee_recipt_for_office_copy:false,
  fee_recipt_for_bank_copy:false,
  fee_recipt_for_student_copy:false
      
    })


  })


})

exports.attendenceTypeSetting = sequelize.define('attendenct_type_setting',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  attendence_type:{
    type:DataTypes.STRING
  },
  biometric_attendence:{
    type:DataTypes.ENUM('enable','disable')
  },
  devices:{
    type:DataTypes.STRING
  },
  low_attendence_limit:{
    type:DataTypes.FLOAT
  }

})
.afterSync(()=>{

  this.attendenceTypeSetting.findByPk(1).then(async(resp)=>{

    if(!resp){
      await this.attendenceTypeSetting.create({
        attendence_type:'day wise',
        biometric_attendence:'disable',
        devices:null,
        low_attendence_limit:75.00
      })

    }


  })


})

exports.idGenerationSetting = sequelize.define('id_generation_setting',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  auto_admission_no:{
    type:DataTypes.ENUM('enable','disable')
  },
  admission_no_prefix:{
      type:DataTypes.STRING      
  },
  admission_no_digit:{
    type:DataTypes.INTEGER
  },
  admission_no_start_from:{
    type:DataTypes.STRING
  },
  auto_staff_id:{
    type:DataTypes.ENUM('enable','disable')
  },
  staff_id_prefix:{
    type:DataTypes.STRING
  },
  staff_no_digit:{
    type:DataTypes.INTEGER
  },
  staff_id_start_from:{
    type:DataTypes.STRING
  }

})
.afterSync(()=>{

  this.idGenerationSetting.findByPk(1).then(async(resp)=>{

    if(!resp){

      await this.idGenerationSetting.create({
        auto_admission_no:'disable',
        admission_no_prefix:null,
        admission_no_digit:null,
        admission_no_start_from:null,
        auto_staff_id:'disable',
        staff_id_prefix:null,
        staff_no_digit:null,
        staff_id_start_from:null

      })

    }


  })


})
