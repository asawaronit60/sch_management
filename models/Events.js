const {sequelize,DataTypes} = require('../connection')
const Class = require('./Class')
const Session = require('./Session')
const Student = require('./student')

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
  },
  sections:{
    type:DataTypes.JSON
  }
})

Event.belongsTo(Class,{foreignKey:'class_id',targetKey:'id',onDelete:'CASCADE'})
Event.belongsTo(Session,{foreignKey:'passout_session_id',targetKey:'id',onDelete:'CASCADE'})

// Event.sync({alter:true})


const manageAlumni = sequelize.define('manage_alumni',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  current_phone:{
    type:DataTypes.STRING,
    allowNull:false
  },
  current_email:{
    type:DataTypes.STRING
  },
  current_photo:{
    type:DataTypes.STRING
  },
  occupation:{
    type:DataTypes.STRING
  },
  address:{
    type:DataTypes.STRING
  }

})

manageAlumni.belongsTo(Student,{foreignKey:'student_id','targetKey':'id',onDelete:null})
manageAlumni.hasMany(Student)
Student.hasOne(manageAlumni)
// manageAlumni.sync({alter:true})

module.exports = {Event,manageAlumni}