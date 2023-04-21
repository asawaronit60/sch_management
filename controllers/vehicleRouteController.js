const Routes = require('../models/Routes')
const Vehicle = require('../models/Vehicle')
const { VehicleRouteVehicle, VehicleRoute } = require('../models/VehicleRoute')
const AppError = require('../utils/AppError')

exports.getAllRoutes = async (req, res, next) => {
  try {

    let vehicleroutes = await VehicleRoute.findAll({
      include: {
        model: Routes,
        attributes: ['id', 'route']
      }
    })

    let results = []

    for (const route of vehicleroutes) {

      let obj = {}
      obj.id = route.getDataValue('id')
      obj.route = route.getDataValue('route')
      // obj.route = route.getDataValue('')

      let vehicles = await VehicleRouteVehicle.findAll({
        where: {
          vehicle_route_id: route.getDataValue('id')
        },
        include: {
          model: Vehicle,
          attributes: ['id', 'vehicle_no']
        }
      })

      obj.vehicles = vehicles.map(v => v.getDataValue('vehicle'))


      results.push(obj)
    }

    res.status(200).json({
      status: 'success',
      data: results
    })

  } catch (err) {
    next(err)
  }
}

exports.createRoute = async (req, res, next) => {
  try {

    let { vehicle_id, route_id } = req.body

    let vehicleRoute = await VehicleRoute.findOne({
      where: {
        route_id
      }
    })

    console.log(vehicleRoute)

    if (vehicleRoute)
      return next(new AppError('Record already exists', 403))


    let newVehicleRoute = await VehicleRoute.create({ route_id })

    for (const id of vehicle_id) {
      await VehicleRouteVehicle.create({
        vehicle_route_id: newVehicleRoute.getDataValue('id'),
        vehicle_id: id
      })
    }

    res.status(200).json({
      status: 'succes',
      message: 'Data added'
    })

  } catch (err) {
    next(err)
  }
}

exports.deleteRoute = async(req,res,next)=>{
  try {
    
    await VehicleRoute.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Deleted successfully!'
    })

  } catch (err) {
    next(err)
  }
}