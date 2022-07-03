const levelController =require('../controllers/levelController')
const router = require('express').Router()


router.get('/' , levelController.getAllLevel)
router.post('/' , levelController.createLevel)
router.delete('/:id' , levelController.deleteLevel)
router.patch('/:id' , levelController.updateLevel)




module.exports  = router