const RoutePickupPointController = require('../controllers/routePickupController')

const router = require('express').Router()

router.get('/',RoutePickupPointController.getAllRoutes)
router.post('/',RoutePickupPointController.createRoute)
router.delete('/:id',RoutePickupPointController.deletePoints)
module.exports = router