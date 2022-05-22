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
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false
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
  allowNull:false,
 },
 call_duration:{
   type:DataTypes.INTEGER,
   allowNull:false
 },
 note:{
  type:DataTypes.STRING,
  allowNull:false
 },
 call_type:{
   type:DataTypes.ENUM('Incoming','Outgoing'),
   allowNull:false
 }

})

module.exports = PhoneCallLog