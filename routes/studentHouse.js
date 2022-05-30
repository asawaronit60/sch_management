const StudentHouseController = require('../controllers/studentHouseController')
const express = require('express')
const router = express.Router()

router.get('/getAllHouse',StudentHouseController.getAllHouse)
router.post('/createHouse',StudentHouseController.createHouse)
router.patch('/updateHouse/:id',StudentHouseController.updateHouse)
router.delete('/deleteHouse/:id',StudentHouseController.deleteHouse)

module.exports = router