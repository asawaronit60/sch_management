const {sequelize,DataTypes} = require('../connection')

const smsSetting = sequelize.define('sms_setting',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  type:{
    type:DataTypes.STRING,
    allowNull:false
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  api_id:{
    type:DataTypes.STRING,
    allowNull:false
  },
  authKey:{
    type:DataTypes.STRING,
    allowNull:false
  },
  senderid:{
    type:DataTypes.STRING,
    allowNull:false
  },
  contact:{
    type:DataTypes.STRING
  },
  username:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  url:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  password:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  is_active:{
    type:DataTypes.STRING,
    defaultValue:'disabled'
  },

})

module.exports = smsSetting