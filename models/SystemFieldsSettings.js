const {sequelize,DataTypes} = require('../connection')

exports.studentSystemFields = sequelize.define('student_system_feilds',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
roll_number:{
  type:DataTypes.BOOLEAN
},
middle_name:{
  type:DataTypes.BOOLEAN
},
last_name:{
  type:DataTypes.BOOLEAN
},
category:{
  type:DataTypes.BOOLEAN
},
religion	:{
  type:DataTypes.BOOLEAN
},
caste	:{
  type:DataTypes.BOOLEAN
},
mobile_number	:{
  type:DataTypes.BOOLEAN
},
email:{
  type:DataTypes.BOOLEAN
},	
admission_date	:{
  type:DataTypes.BOOLEAN
},
student_photo	:{
  type:DataTypes.BOOLEAN
},
house_id:{
  type:DataTypes.BOOLEAN
},
blood_group	:{
  type:DataTypes.BOOLEAN
},
height	:{
  type:DataTypes.BOOLEAN
},
weight	:{
  type:DataTypes.BOOLEAN
},
measurement_date	:{
  type:DataTypes.BOOLEAN
},
father_name	:{
  type:DataTypes.BOOLEAN
},
father_phone	:{
  type:DataTypes.BOOLEAN
},
father_occupation	:{
  type:DataTypes.BOOLEAN
},
father_photo	:{
  type:DataTypes.BOOLEAN
},
mother_name	:{
  type:DataTypes.BOOLEAN
},
mother_phone	:{
  type:DataTypes.BOOLEAN
},
mother_occupation	:{
  type:DataTypes.BOOLEAN
},
mother_photo	:{
  type:DataTypes.BOOLEAN
},
guardian_name	:{
  type:DataTypes.BOOLEAN
},
guardian_phone	:{
  type:DataTypes.BOOLEAN
},
guardian_relation	:{
  type:DataTypes.BOOLEAN
},
guardian_email	:{
  type:DataTypes.BOOLEAN
},
guardian_occupation	:{
  type:DataTypes.BOOLEAN
},
guardian_photo	:{
  type:DataTypes.BOOLEAN
},
guardian_address	:{
  type:DataTypes.BOOLEAN
},
if_guardian_address_is_current_address:{
  type:DataTypes.BOOLEAN
},	
if_permanent_address_is_current_address	:{
  type:DataTypes.BOOLEAN
},
route_list	:{
  type:DataTypes.BOOLEAN
},
hostel_details	:{
  type:DataTypes.BOOLEAN
},
bank_account_number	:{
  type:DataTypes.BOOLEAN
},
bank_name	:{
  type:DataTypes.BOOLEAN
},
ifsc_code	:{
  type:DataTypes.BOOLEAN
},
national_identification_number	:{
  type:DataTypes.BOOLEAN
},
local_identification_number	:{
  type:DataTypes.BOOLEAN
},
rte	:{
  type:DataTypes.BOOLEAN
},
previous_school_details	:{
  type:DataTypes.BOOLEAN
},
note	:{
  type:DataTypes.BOOLEAN
},
upload_documents	:{
  type:DataTypes.BOOLEAN
},
barcode:{
  type:DataTypes.BOOLEAN
}


})
.afterSync(()=>{

  this.studentSystemFields.findByPk(1).then(async(resp)=>{

    if(!resp)
    await this.studentSystemFields.create({
      roll_number:true,
      middle_name:false,
      last_name:true,
      category:true,
      religion:true,
      caste	:true,
      mobile_number	:true,
      email:true,	
      admission_date	:true,
      student_photo	:true,
      house_id:true,
      blood_group	:true,
      height	:true,
      weight	:true,
      measurement_date	:true,
      father_name	:true,
      father_phone	:true,
      father_occupation	:true,
      father_photo	:true,
      mother_name	:true,
      mother_phone	:true,
      mother_occupation	:true,
      mother_photo	:true,
      guardian_name	:true,
      guardian_phone	:true,
      guardian_relation	:true,
      guardian_email	:true,
      guardian_occupation	:true,
      guardian_photo	:true,
      guardian_address	:true,
      if_guardian_address_is_current_address:true,	
      if_permanent_address_is_current_address	:true,
      route_list	:true,
      hostel_details	:true,
      bank_account_number	:true,
      bank_name	:true,
      ifsc_code	:true,
      national_identification_number	:true,
      local_identification_number	:true,
      rte	:true,
      previous_school_details	:true,
      note	:true,
      upload_documents	:true,
      barcode:true

    })


  })

})

exports.staffSystemFields = sequelize.define('staff_system_fields',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  designation:{
    type:DataTypes.BOOLEAN
  },
  department:{
    type:DataTypes.BOOLEAN
  },
  last_name:{
    type:DataTypes.BOOLEAN
  },	
  father_name:{
    type:DataTypes.BOOLEAN
  },	
  mother_name:{
    type:DataTypes.BOOLEAN
  },	
  date_of_joining:{
    type:DataTypes.BOOLEAN
  },	
  phone	:{
    type:DataTypes.BOOLEAN
  },
  emergency_contact_number:{
    type:DataTypes.BOOLEAN
  },	
  marital_status:{
    type:DataTypes.BOOLEAN
  },	
  photo	:{
    type:DataTypes.BOOLEAN
  },
  current_address	:{
    type:DataTypes.BOOLEAN
  },
  permanent_address:{
    type:DataTypes.BOOLEAN
  },	
  qualification	:{
    type:DataTypes.BOOLEAN
  },
  work_experience	:{
    type:DataTypes.BOOLEAN
  },
  note	:{
    type:DataTypes.BOOLEAN
  },
  epf_no	:{
    type:DataTypes.BOOLEAN
  },
  basic_salary:{
    type:DataTypes.BOOLEAN
  },	
  contract_type	:{
    type:DataTypes.BOOLEAN
  },
  work_shift:{
    type:DataTypes.BOOLEAN
  },	
  work_location	:{
    type:DataTypes.BOOLEAN
  },
  leaves	:{
    type:DataTypes.BOOLEAN
  },
  bank_account_details:{
    type:DataTypes.BOOLEAN
  },	
  social_media_link	:{
    type:DataTypes.BOOLEAN
  },
  upload_documents:{
    type:DataTypes.BOOLEAN
  },	
  barcode:{
    type:DataTypes.BOOLEAN
  }


})
.afterSync(()=>{

  this.staffSystemFields.findByPk(1).then(async(resp)=>{

        if(!resp)
        await this.staffSystemFields.create({
          designation:true,
          department:true,
          last_name:true,	
          father_name:true,	
          mother_name:true,	
          date_of_joining:true,	
          phone	:true,
          emergency_contact_number:true,	
          marital_status:true,	
          photo	:true,
          current_address	:true,
          permanent_address:true,	
          qualification	:true,
          work_experience	:true,
          note	:true,
          epf_no	:true,
          basic_salary:true,	
          contract_type	:true,
          work_shift:true,	
          work_location	:true,
          leaves	:true,
          bank_account_details:true,	
          social_media_link	:true,
          upload_documents:true,	
          barcode:false
        })


  })

})