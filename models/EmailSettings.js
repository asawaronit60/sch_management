const {sequelize,DataTypes} = require('../connection')

exports.smtpEmailSetting = sequelize.define('smpt_email_setting',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  email_engine:{
    type:DataTypes.STRING
  },
  smtp_username:{
    type:DataTypes.STRING
  },
  smtp_password:{
    type:DataTypes.STRING
  },
  smpt_server:{
    type:DataTypes.STRING
  },
  smtp_port:{
    type:DataTypes.STRING
  },
  smtp_security:{
    type:DataTypes.STRING
  },
  smtp_auth:{
    type:DataTypes.STRING
  },
  is_active:{
    type:DataTypes.BOOLEAN
  }
})
.afterSync(()=>{
    this.smtpEmailSetting.findByPk(1).then(async resp=>{
        if(!resp){
          await this.smtpEmailSetting.create({
            email_engine:'smtp ',
            smtp_username:'smtp username',
            smtp_password:'smtp password',
            smpt_server:'smpt server',
            smtp_port:'smtp port',
            smtp_security:'smtp security',
            smtp_auth:'smtp auth',
            is_active:false
          })

        }
    })
})

// this.smtpEmailSetting.sync({alter:true})

exports.awsSesEmailSetting = sequelize.define('aws_ses_email_setting',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  email:{
    type:DataTypes.STRING
  },
  access_id_key:{
    type:DataTypes.STRING
  },
  secret_access_key:{
    type:DataTypes.STRING
  },
  region:{
    type:DataTypes.STRING
  },
  is_active:{
    type:DataTypes.BOOLEAN
  }


})
.afterSync(()=>{

  this.awsSesEmailSetting.findByPk(1).then(async resp=>{
      if(!resp){
        await this.awsSesEmailSetting.create({
          email:'email',
          access_id_key:'access id key',
          secret_access_key:'secret access key',
          region:'region',
          is_active:false
        })
      }
  })
})

// this.awsSesEmailSetting.sync({alter:true})