const {sequelize,DataTypes} = require('../connection')


const NotificationSetting = sequelize.define('notification_setting',{

    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    type:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    is_mail:{
      type:DataTypes.STRING,
      defaultValue:'0'
    },
    is_sms:{
      type:DataTypes.STRING,
      defaultValue:'0'
    },
    is_notification:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    display_notification:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    display_sms:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:1
    },
    template:{
      type:DataTypes.STRING,
      allowNull:false
    },
    variables:{
      type:DataTypes.STRING,
      allowNull:false
    }
})


module.exports = NotificationSetting