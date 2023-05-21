const {sequelize,DataTypes} = require('../connection')

exports.clicktailSmsSetting = sequelize.define('clicktail_sms_setting',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  username:{
    type:DataTypes.STRING,
    allowNull:false
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  },
  api_key:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }

})
.afterSync(()=>{
  this.clicktailSmsSetting.findByPk(1).then(async(resp)=>{
    if(!resp){
    await  this.clicktailSmsSetting.create({
        username:'username',
        password:'password',
        api_key:'api key'
      })
    }

  })
})




exports.twilio = sequelize.define('twilio_sms_gateway',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  Twilio_Account_SID:{
    type:DataTypes.STRING,
  },
  authentication_token:{
    type:DataTypes.STRING,
  },
  registered_phone_no:{
    type:DataTypes.STRING,
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }

}).afterSync(()=>{
  this.twilio.findByPk(1).then(async(resp)=>{
    if(!resp){
    await this.twilio.create({
      Twilio_Account_SID:'Twilio Account SID',
      authentication_token:'authentication token',
      registered_phone_no:'registered_phone_no'
      })
    }

  })
})




exports.msg91 = sequelize.define('MSG91',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  auth_key:{
    type:DataTypes.STRING,
    allowNull:false
  },
  sender_id:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }

}).afterSync(()=>{
  this.msg91.findByPk(1).then(async(resp)=>{
    if(!resp){
    await  this.msg91.create({
      auth_key:'auth key',
      sender_id:'sender id',
      })
    }

  })
})




exports.textLocal = sequelize.define('textlocal',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  username:{
    type:DataTypes.STRING,
  },
  hashkey:{
    type:DataTypes.STRING,
  },
  sender_id:{
    type:DataTypes.STRING,
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }

}).afterSync(()=>{
  this.textLocal.findByPk(1).then(async(resp)=>{
    if(!resp){
    await  this.textLocal.create({
        username:'username',
        hashkey:'hashkey',
        sender_id:'sender id'
      })
    }

  })
})




exports.smsCountry = sequelize.define('smscountry',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  username:{
    type:DataTypes.STRING,
    allowNull:false
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  },
  sender_id:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }

}).afterSync(()=>{
  this.smsCountry.findByPk(1).then(async(resp)=>{
    if(!resp){
    await  this.smsCountry.create({
        username:'username',
        password:'password',
        sender_id:'sender_id'
      })
    }

  })
})




exports.bulkSms = sequelize.define('bulksms',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  username:{
    type:DataTypes.STRING,
    allowNull:false
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }

}).afterSync(()=>{
  this.bulkSms.findByPk(1).then(async(resp)=>{
    if(!resp){
    await  this.bulkSms.create({
        username:'username',
        password:'password',
      })
    }

  })
})

exports.mobiReach= sequelize.define('mobireach',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  auth_key:{
    type:DataTypes.STRING,
    allowNull:false
  },
  sender_id:{
    type:DataTypes.STRING,
    allowNull:false
  },
  route_id:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }

}).afterSync(()=>{
  this.mobiReach.findByPk(1).then(async(resp)=>{
    if(!resp){
    await  this.mobiReach.create({
       auth_key:'auth_key',
       route_id:'route id',
        sender_id:'sender_id'
      })
    }

  })
})


exports.nexmo = sequelize.define('nexmo',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  secret_key:{
    type:DataTypes.STRING,
    allowNull:false
  },
  registered_form_no:{
    type:DataTypes.STRING,
    allowNull:false
  },
  api_key:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }

}).afterSync(()=>{
  this.nexmo.findByPk(1).then(async(resp)=>{
    if(!resp){
    await  this.nexmo.create({
      secret_key:'secret key',
      registered_form_no:'registered form no',
        api_key:'api key'
      })
    }

  })
})


exports.africasTalking = sequelize.define('africas_talking',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  username:{
    type:DataTypes.STRING,
    allowNull:false
  },
  short_code:{
    type:DataTypes.STRING,
  },
  api_key:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }

}).afterSync(()=>{
  this.africasTalking.findByPk(1).then(async(resp)=>{
    if(!resp){
    await  this.africasTalking.create({
        username:'username',
        short_code:'short code',
        api_key:'api key'
      })
    }

  })
})


exports.smsEgypt = sequelize.define('sms_egypt',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  username:{
    type:DataTypes.STRING,
    allowNull:false
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  },
  sender_id:{
    type:DataTypes.STRING,
  },
  type:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }

}).afterSync(()=>{
  this.smsEgypt.findByPk(1).then(async(resp)=>{
    if(!resp){
    await  this.smsEgypt.create({
        username:'username',
        password:'password',
        sender_id:'sender id',
        type:'type'
      })
    }

  })
})


exports.customSmsGateway = sequelize.define('custom_sms_gateway',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  name:{  
  type:DataTypes.STRING,
  allowNull:false
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }

})
.afterSync(()=>{
  this.customSmsGateway.findByPk(1).then(async(resp)=>{
    if(!resp){
    await  this.customSmsGateway.create({
        name:'username',
      })
    }

  })
})