const HostelController = require('../controllers/hostelController')

const router = require('express').Router()

router.get('/',HostelController.getAllHostel)
router.post('/',HostelController.createHostel)
router.delete('/:id',HostelController.deleteHostel)
router.patch('/:id',HostelController.updateHostel)

module.exports = router