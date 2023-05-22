const {sequelize,DataTypes} = require('../connection')

let data = [

  

]

const NotificationSetting = sequelize.define('notification_setting',{

    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    event:{
        type:DataTypes.STRING,
        allowNull:false
    },
    is_mail:{
      type:DataTypes.STRING,
      defaultValue:'0'
    },
    is_sms:{
      type:DataTypes.STRING,
      defaultValue:'0'
    },
    is_student:{
      type:DataTypes.STRING,
      defaultValue:'0'
    },
    is_gaurdian:{
      type:DataTypes.STRING,
      defaultValue:'0'
    },
    template:{
      type:DataTypes.STRING
    },
    variables:{
      type:DataTypes.STRING,
      allowNull:false
    }
})


module.exports = NotificationSetting