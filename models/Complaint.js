const {sequelize,DataTypes} = require('../connection')

const Complaint = sequelize.define('complaint',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  source:{
    tpye:DataTypes.STRING,
    defaultValue:null
  },
  complaint_type:{
    type:DataTypes.STRING,
    allowNull:false
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      isEmail:true
    }
  },
  contact:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false
  },
  action_taken:{
    type:DataTypes.NUMBER,
    allowNull:false
  },
  assigned:{
    type:DataTypes.STRING,
    allowNull:false
  },
  note:{
    type:DataTypes.STRING,
    allowNull:false
  },
  image:{
    type:DataTypes.STRING,
    allowNull:false
  }

})

module.exports = Complaint;