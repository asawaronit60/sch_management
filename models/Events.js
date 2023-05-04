const {sequelize,DataTypes} = require('../connection')

const Event = sequelize.define('event',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  event_title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  event_for:{
    type:DataTypes.ENUM('All Alumni','class'),
    allowNull:false
  },

  event_from_date:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  event_to_date:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  note:{
    type:DataTypes.TEXT,
  },
  event_notification_message:{
    type:DataTypes.TEXT,
  },
  photo:{
    type:DataTypes.STRING
  },
  template_id:{
    type:DataTypes.STRING
  },
  email:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  sms:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }
})



module.exports = Event