const {sequelize,DataTypes} = require('../connection')
const Route = require('../models/Routes')
const PickupPoint= require('../models/PickupPoints')

const RoutePickup  = sequelize.define('route_pickup',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },

})

RoutePickup.belongsTo(Route,{foreignKey:'route_id',targetKey:'id',onDelete:'CASCADE'})

const RoutePickUpPoints = sequelize.define('route_pickup_point',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  distance:{
    type:DataTypes.FLOAT
  },
  pickup_time:{
    type:DataTypes.TIME,
    allowNull:false
  },
  monthly_fee:{
    type:DataTypes.FLOAT
  }

})

RoutePickUpPoints.belongsTo(RoutePickup,{foreignKey:'route_pickup_id',targetKey:'id',onDelete:'CASCADE'})
RoutePickUpPoints.belongsTo(PickupPoint,{foreignKey:'pickup_point_id',targetKey:'id',onDelete:'CASCADE'})

// RoutePickUpPoints.sync({alter:true})

module.exports = {
  RoutePickup,
  RoutePickUpPoints
}