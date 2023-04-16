const hostelRoomController = require('../controllers/hostelRoomController')

const router = require('express').Router()

router.get('/',hostelRoomController.getAllHostelRoom)
router.post('/',hostelRoomController.createHostelRoom)
router.delete('/:id',hostelRoomController.deleteHostelRoom)
router.patch('/:id',hostelRoomController.updateHostelRoom)


module.exports = router