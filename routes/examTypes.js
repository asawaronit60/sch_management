
const examTypeConstroller  = require('../controllers/examTypeController')
const router = require('express').Router()

router.get('/',examTypeConstroller.getAllType)
router.post('/',examTypeConstroller.createType)
router.delete('/:id',examTypeConstroller.deleteType)
router.patch('/:id',examTypeConstroller.updateType)

module.exports = router