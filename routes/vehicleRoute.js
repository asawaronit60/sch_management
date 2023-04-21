const VehicleRouteController = require('../controllers/vehicleRouteController')

const router = require('express').Router()

router.get('/',VehicleRouteController.getAllRoutes)
router.post('/',VehicleRouteController.createRoute)
router.delete('/:id',VehicleRouteController.deleteRoute)
module.exports = router