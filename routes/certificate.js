const certificateController = require('../controllers/certificateController')
const router = require('express').Router()


router.get('/' ,certificateController.getAllCertificates)
router.post('/' ,certificateController.createCertificates)
router.delete('/:id' ,certificateController.deleteCertificates)
router.patch('/:id' ,certificateController.updateCertificates)


module.exports  = router