const e = require('express')
const {sequelize,DataTypes} = require('../connection')

const captchaSetting = sequelize.define('captcha_setting',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  user_login:{
    type:DataTypes.BOOLEAN
  },
  login:{
    type:DataTypes.BOOLEAN
  },
  admission:{
    type:DataTypes.BOOLEAN
  },
  complain:{
    type:DataTypes.BOOLEAN
  },
  contact_us:{
    type:DataTypes.BOOLEAN
  },
  guest_login_signup:{
    type:DataTypes.BOOLEAN
  }

})
.afterSync(()=>{

  captchaSetting.findByPk(1).then(async(resp)=>{
        if(!resp)
      await captchaSetting.create({
        user_login:false,
        login:false,
        admission:false,
        complain:false,
        contact_us:false,
        guest_login_signup:false

      })

  })

})

module.exports = captchaSetting