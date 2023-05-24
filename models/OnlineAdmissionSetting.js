const {sequelize,DataTypes} = require('../connection')

const onlineAdmissionFormSetting = sequelize.define('online_admission_form_setting',{

    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    online_admission:{
      type:DataTypes.INTEGER,
      defaultValue:'1'
    },
    online_admission_payment_option:{
      type:DataTypes.INTEGER,
      defaultValue:'1'
    },
    online_admission_fee:{
      type:DataTypes.FLOAT,
      defaultValue:100
    },
    online_admission_admission_form:{
      type:DataTypes.STRING
    },
    online_admission_instructions:{

    },
    online_admission_terms_and_conditions:{

    },

})