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
    allowNull:false
  },
  vehicle_model:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  year_made:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  chasis_no:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  max_capacity:{
    type:DataTypes.INTEGER,
    defaultValue:null
  },
  registration_no:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  driver_name:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  driver_licence:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  driver_contact:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  note:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  vehicle_photo:{
    type:DataTypes.STRING,
    defaultValue:null
  }

})

module.exports = Vehicle