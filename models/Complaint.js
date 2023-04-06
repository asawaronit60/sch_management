const {sequelize,DataTypes} = require('../connection')

const Complaint = sequelize.define('complaint',{

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
  complaint_type:{
    type:DataTypes.STRING,
    allowNull:true
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
  contact:{
    type:DataTypes.STRING,
    allowNull:true
  },
  description:{
    type:DataTypes.STRING,
    allowNull:true
  },
  action_taken:{
    type:DataTypes.STRING,
    allowNull:true
  },
  assigned:{
    type:DataTypes.STRING,
    allowNull:true
  },
  note:{
    type:DataTypes.STRING,
    allowNull:true
  },
  image:{
    type:DataTypes.STRING,
    allowNull:true
  }

})

// Complaint.sync({alter:true})

module.exports = Complaint;