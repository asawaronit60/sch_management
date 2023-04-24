const {  RoutePickup,
  RoutePickUpPoints
} = require('../models/RoutePickupPoint')

const Route = require('../models/Routes')
const PickupPoint = require('../models/PickupPoints')
const AppError = require('../utils/AppError')

exports.getAllRoutes = async(req,res,next)=>{
  try {
    
    let RoutePoints = await RoutePickup.findAll({
      include:{
        model:Route,
        attributes:['id','route']
      }
    })
    let results = []


    for(const routePoint of RoutePoints){

        let obj = {}
        obj.id = routePoint.getDataValue('id')
        obj.route = routePoint.getDataValue('route')

        let pickupPoint = await RoutePickUpPoints.findAll({
          where:{
            route_pickup_id:routePoint.getDataValue('id')
          },
          include:{
            model:PickupPoint,
            attributes:['id','point']
          }
        })

        obj.points = pickupPoint.map(el=>el)

        results.push(obj)

    }


    res.status(200).json({
      status:'succes',
      data:results
    })

  } catch (err) {
    next(err)
  }
}

exports.createRoute = async(req,res,next)=>{

    try {

      let { route_id , points } = req.body

      let route =await RoutePickup.findOne({where:{route_id}})
 
      if(route)
      return next(new AppError('Route already exists',403))

      let newRoutePoint = await RoutePickup.create({route_id})

      for(const point of points) {
        console.log(point)
        await RoutePickUpPoints.create({
          route_pickup_id:newRoutePoint.getDataValue('id'),
          pickup_time:point.pickup_time,
          distance:point.distance,
          monthly_fee:point.monthly_fee,
          pickup_point_id:point.pickup_point_id
        })


      }

      res.status(200).json({
        status:'success',
        message:'Data created!'
      })
      
    } catch (err) {
      
      next(err)
    }
   


}

exports.deletePoints = async(req,res,next)=>{
  try {
    await RoutePickup.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Route deleted successfully!'
    })

  } catch (err) {
    next(err)
  }
}