const {sequelize,DataTypes} = require('../connection')

const headerFooterSetting = sequelize.define('header_footer',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  fee_recipt_header:{
    type:DataTypes.STRING
  },
  fee_recipt_footer:{
    type:DataTypes.STRING
  },
  payslip_header:{
    type:DataTypes.STRING
  },
  payslip_footer:{
    type:DataTypes.STRING
  },
  online_admission_header:{
    type:DataTypes.STRING
  },
  online_admission_footer:{
    type:DataTypes.STRING
  },
  online_exam_header:{
    type:DataTypes.STRING
  },
  online_exam_footer:{
    type:DataTypes.STRING
  }
})
.afterSync(()=>{

  headerFooterSetting.findByPk(1).then(async(resp)=>{

    if(!resp){

      await headerFooterSetting.create({
        fee_recipt_header:null,
        fee_recipt_footer:'The recipt is computer generated hence no signature is required',
        payslip_header:null,
        payslip_footer:'The recipt is computer generated hence no signature is required',
        online_admission_header:null,
        online_admission_footer:'The recipt is computer generated hence no signature is required',
        online_exam_header:null,
        online_exam_footer:'The recipt is computer generated hence no signature is required'
      })

    }

  })

})

module.exports = headerFooterSetting