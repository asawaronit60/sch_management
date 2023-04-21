const routeController = require('../controllers/routeController')

const router = require('express').Router()

router.get('/',routeController.getAllRoutes)
router.post('/',routeController.createRoutes)
router.delete('/:id',routeController.deleteRoutes)
router.patch('/:id',routeController.updateRoutes)

module.exports = router