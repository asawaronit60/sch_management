const { sequelize, DataTypes } = require('../connection')

exports.onlineAdmissionFormSetting = sequelize.define('online_admission_form_setting', {

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  online_admission: {
    type: DataTypes.INTEGER,
    defaultValue: '1'
  },
  online_admission_payment_option: {
    type: DataTypes.INTEGER,
    defaultValue: '1'
  },
  online_admission_fee: {
    type: DataTypes.FLOAT
  },
  online_admission_admission_form: {
    type: DataTypes.STRING
  },
  online_admission_instructions: {
    type: DataTypes.STRING
  },
  online_admission_terms_and_conditions: {
    type: DataTypes.STRING
  },

})
  .afterSync(() => {
    this.onlineAdmissionFormSetting.findByPk(1).then(async (resp) => {
      if (!resp) {
        await this.onlineAdmissionFormSetting.create({
          online_admission: 1,
          online_admission_payment_option: 1,
          online_admission_fee: 100,
          online_admission_admission_form: null,
          online_admission_instructions: 'Please enter your institution online admission instructions here.',
          online_admission_terms_and_conditions: ' Please enter your institution online admission terms & conditions here.'

        })
      }
    })
  })


exports.onlineAdmissionFormFields = sequelize.define('online_admission_form_fields',{


  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  admission_date:{
    type:DataTypes.BOOLEAN
  },
  first_name:{
    type:DataTypes.BOOLEAN
  },
  last_name:{
    type:DataTypes.BOOLEAN
  },
  rte:{
    type:DataTypes.BOOLEAN
  },
  image:{
    type:DataTypes.BOOLEAN
  },
  mobileno:{
    type:DataTypes.BOOLEAN
  },
  email:{
    type:DataTypes.BOOLEAN
  },
  religion:{
    type:DataTypes.BOOLEAN
  },
  caste:{
    type:DataTypes.BOOLEAN
  },
  dob:{
    type:DataTypes.BOOLEAN
  },
  gender:{
    type:DataTypes.BOOLEAN
  },
  current_address:{
    type:DataTypes.BOOLEAN
  },
  permanent_address:{
    type:DataTypes.BOOLEAN
  },
  blood_group:{
    type:DataTypes.BOOLEAN
  },
 
  bank_account_no:{
    type:DataTypes.BOOLEAN
  },
  bank_name:{
    type:DataTypes.BOOLEAN
  },
  ifsc_code:{
    type:DataTypes.BOOLEAN
  },
  guardian_is:{
    type:DataTypes.BOOLEAN
  },
  father_name:{
    type:DataTypes.BOOLEAN
  },
  father_phone:{
    type:DataTypes.BOOLEAN
  },
  father_occupation:{
    type:DataTypes.BOOLEAN
  },
  mother_name:{
    type:DataTypes.BOOLEAN
  },
  mother_phone:{
    type:DataTypes.BOOLEAN
  },
  mother_occupation:{
    type:DataTypes.BOOLEAN
  },
  gaurdian_name:{
    type:DataTypes.BOOLEAN
  },
  gaurdian_phone:{
    type:DataTypes.BOOLEAN
  },
  gaurdian_occupation:{
    type:DataTypes.BOOLEAN
  },
  gaurdian_email:{
    type:DataTypes.BOOLEAN
  },
  gaurdian_relation:{
    type:DataTypes.BOOLEAN
  },
  gaurdian_address:{
    type:DataTypes.BOOLEAN
  },
   gaurdian_photo:{
    type:DataTypes.BOOLEAN
  },
  father_pic:{
    type:DataTypes.BOOLEAN
  },
  mother_pic:{
    type:DataTypes.BOOLEAN
  },
  gaurdian_pic:{
    type:DataTypes.BOOLEAN
  },
  previous_school:{
    type:DataTypes.BOOLEAN
  },
  height:{
    type:DataTypes.BOOLEAN
  },
  weight:{
    type:DataTypes.BOOLEAN
  },
  house_id:{
    type:DataTypes.BOOLEAN
  }

})
.afterSync(()=>{

  this.onlineAdmissionFormFields.findByPk(1).then(async(resp)=>{

    if(!resp)
   await this.onlineAdmissionFormFields.create({
      admission_date:false,
      first_name:false,
      last_name:false,
      rte:false,
      image:false,
      mobileno:false,
      email:false,
      religion:false,
      caste:false,
      dob:false,
      gender:false,
      current_address:false,
      permanent_address:false,
      blood_group:false,
      bank_account_no:false,
      bank_name:false,
      ifsc_code:false,
      guardian_is:false,
      father_name:false,
      father_phone:false,
      father_occupation:false,
      mother_name:false,
      mother_phone:false,
      mother_occupation:false,
      gaurdian_name:false,
      gaurdian_phone:false,
      gaurdian_occupation:false,
      gaurdian_email:false,
      gaurdian_relation:false,
      gaurdian_address:false,
       gaurdian_photo:false,
      father_pic:false,
      mother_pic:false,
      gaurdian_pic:false,
      previous_school:false,
      height:false,
      weight:false,
      house_id:false
    })


  })

})