const {sequelize,DataTypes} = require('../connection')
const Vehicle = require('./Vehicle')

const vehicleRoute = sequelize.define('vehicle_route',{


  id:{
    type:DataTypes.STRING,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  }


})

vehicleRoute.belongsTo(Route,{foreignKey:'route_id',targetKey:'id',onDelete:'CASCADE'})
vehicleRoute.belongsTo(Vehicle,{foreignKey:'vehicle_id',targetKey:'id',onDelete:'CASCADE'})

module.exports = vehicleRoute