const vehicleController = require('../controllers/vehicleController')

const router = require('express').Router()

router.get('/',vehicleController.getAllVehicle)
router.post('/',vehicleController.createVehicle)
router.delete('/:id',vehicleController.deleteVehicle)
router.patch('/:id',vehicleController.updateVehicle)

module.exports = router