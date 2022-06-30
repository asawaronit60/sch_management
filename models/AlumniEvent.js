const {sequelize,DataTypes} = require('../connection')

const AlumniEvent = sequelize.define('alumni_event',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  event_for:{
    type:DataTypes.STRING,
    allowNull:false
  },
  from_date:{
    type:DataTypes.DATEONLY,
  },
  to_date:{
    type:DataTypes.DATEONLY,
  },
  note:{
    type:DataTypes.TEXT,
    allowNull:false
  },
  event_notification_message:{
    type:DataTypes.TEXT,
    allowNull:false
  }
})

module.exports = AlumniEvent