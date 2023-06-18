const {sequelize,DataTypes} = require('../connection')

const emailTemplate = sequelize.define('email_template',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  message:{
    type:DataTypes.STRING,
    allowNull:false
  },
  document:{
    type:DataTypes.STRING
  },
  document_original_name:{
    type:DataTypes.STRING     
  },
  document_type:{
    type:DataTypes.STRING
  }


})


const smsTemplate = sequelize.define('sms_template',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  message:{
    type:DataTypes.STRING,
    allowNull:false
  }

})

emailTemplate.sync({alter:true})

module.exports = {emailTemplate,smsTemplate}