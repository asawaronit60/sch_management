const PickupPointController = require('../controllers/pickupPointController')

const router = require('express').Router()

router.get('/',PickupPointController.getAllPoints)
router.post('/',PickupPointController.createPoints)
router.delete('/:id',PickupPointController.deletePoints)
router.patch('/:id',PickupPointController.updatePoints)

module.exports = router