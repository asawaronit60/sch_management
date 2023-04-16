const roomTypeController = require('../controllers/hostelRoomTypeController')

const router = require('express').Router()

router.get('/',roomTypeController.getAllRoom)
router.post('/',roomTypeController.createRoom)
router.delete('/:id',roomTypeController.deleteRoom)
router.patch('/:id',roomTypeController.updateRoom)

module.exports = router