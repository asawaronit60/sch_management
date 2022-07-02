const {sequelize,DataTypes} = require('../connection')

const Event = sequelize.define('event',{

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
    type:DataTypes.ENUM('All Alumni','Program'),
    allowNull:false
  },
  section_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'sections',
      key:'id'
    },
    defaultValue:null
  },
  program_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'classes',
      key:'id'
    },
    defaultValue:null
  },
  intake_id:{
    type:DataTypes.INTEGER,
    defaultValue:null,
    references:{
      model:'sessions',
      key:'id'
    }
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

module.exports = Event