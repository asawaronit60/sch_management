const {sequelize,DataTypes} = require('../connection')

const Vehicle = sequelize.define('vehicle',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  vehicle_no:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  vehicle_model:{
    type:DataTypes.STRING,
    allowNull:false,
    defaultValue:'none'
  },
  manufacture_year:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  driver_name:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  driver_licence:{
    type:DataTypes.STRING,
    allowNull:false,
    defaultValue:'none'
  },
  driver_contact:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  note:{
    type:DataTypes.STRING,
  }

})

module.exports = Vehicle