const marksheetDesignController = require('../controllers/markSheetDesignController')

const router = require('express').Router()

router.get('/',marksheetDesignController.getAllDesign)
router.get('/:id',marksheetDesignController.getDesign)
router.post('/',marksheetDesignController.createDesign)
router.delete('/:id',marksheetDesignController.deleteDesign)
router.patch('/:id',marksheetDesignController.updateDesign)

module.exports = router