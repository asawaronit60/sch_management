const { sequelize, DataTypes } = require('../connection')
const Vehicle = require('./Vehicle')
const Route = require('./Routes')
const VehicleRoute = sequelize.define('vehicle_route', {


  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  }


})

VehicleRoute.belongsTo(Route, { foreignKey: 'route_id', targetKey: 'id', onDelete: 'CASCADE' })
// vehicleRoute.belongsTo(Vehicle,{foreignKey:'vehicle_id',targetKey:'id',onDelete:'CASCADE'})

// VehicleRoute.sync({ alter: true })

const VehicleRouteVehicle = sequelize.define('vehicle_route_vehicle', {

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  }

})

VehicleRouteVehicle.belongsTo(VehicleRoute, { foreignKey: 'vehicle_route_id', targetKey: 'id', onDelete: 'CASCADE' })
VehicleRouteVehicle.belongsTo(Vehicle, { foreignKey: 'vehicle_id', targetKey: 'id', onDelete: 'CASCADE' })

module.exports = { VehicleRoute, VehicleRouteVehicle }