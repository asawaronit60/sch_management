const hostelRoomController = require('../controllers/hostelRoomController')

const router = require('express').Router()

router.get('/',hostelRoomController.getAllHostelRoom)
router.post('/',hostelRoomController.createHostelRoom)
router.delete('/:id',hostelRoomController.deleteHostelRoom)
router.patch('/:id',hostelRoomController.updateHostelRoom)

router.get('/rooms/:hostel_id',hostelRoomController.getRoom)

module.exports = router