const {sequelize,DataTypes} = require('../connection')

const admissionEnquiry = sequelize.define('admission_enquiry',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  source:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
   email:{
    type:DataTypes.STRING,
    allowNull:true,
    validate:{
      isEmail:true
    }
  },
  phone:{
    type:DataTypes.STRING,
    allowNull:false
  },
  address:{
    type:DataTypes.STRING,
    allowNull:true
  },
  enquiry_date:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  last_followUp_date:{
    type:DataTypes.DATE,
    allowNull:true,
    defaultValue:null
  },
  next_followUp_date:{
    type:DataTypes.DATE,
    allowNull:true,
    defaultValue:null
  },
  status:{
    type:DataTypes.STRING,
    allowNull:false
  },
  note:{
    type:DataTypes.STRING,
    allowNull:true
  },
  description:{
    type:DataTypes.STRING,
    allowNull:true
  },
  assigned:{
    type:DataTypes.STRING,
    allowNull:false
  },
  referenced:{
    type:DataTypes.STRING,
    allowNull:true
  },
  no_of_child:{
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:1
  }

})

module.exports = admissionEnquiry;