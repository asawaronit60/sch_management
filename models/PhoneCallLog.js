const {sequelize,DataTypes}  =require('../connection')

const PhoneCallLog = sequelize.define('phone_call_log',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:true
  },
  description:{
    type:DataTypes.STRING,
    allowNull:true
  },
 phone:{
   type:DataTypes.STRING,
   allowNull:false
 },
 Date:{
   type:DataTypes.DATEONLY,
   allowNull:false,
 },
 next_follow_date:{
  type:DataTypes.DATEONLY,
  allowNull:true,
 },
 call_duration:{
   type:DataTypes.INTEGER,
   allowNull:true
 },
 note:{
  type:DataTypes.STRING,
  allowNull:true
 },
 call_type:{
   type:DataTypes.ENUM('Incoming','Outgoing'),
   defaultValue:'Incoming'
 }

})

PhoneCallLog.sync({alter:true})
module.exports = PhoneCallLog