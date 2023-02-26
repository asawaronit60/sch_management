const admitCardDesignController = require('../controllers/admitCardDesignController')

const router = require('express').Router()

router.get('/',admitCardDesignController.getAllDesign)
router.get('/:id',admitCardDesignController.getDesign)
router.post('/',admitCardDesignController.createDesign)
router.delete('/:id',admitCardDesignController.deleteDesign)
router.patch('/:id',admitCardDesignController.updateDesign)

module.exports = router