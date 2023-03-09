const {sequelize,DataTypes } = require('../connection')
const Session = require('./Session')

const exam = sequelize.define('exams',{
  
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  exam:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING
  },
  publish:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  publish_result:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  admit_card_roll_no:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  profile_roll_no:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  status:{
    type:DataTypes.ENUM('active','inactive'),
    defaultValue:'active'
  }
  

})
exam.belongsTo(Session,{foreignKey:'session_id',targetKey:'id',onDelete:null})
// exam.sync({alter:true})
module.exports = exam