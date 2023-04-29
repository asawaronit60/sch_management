const certificateController = require('../controllers/certificateController')
const router = require('express').Router()


router.get('/' ,certificateController.getAllCertificates)
router.post('/' ,certificateController.createCertificates)
router.delete('/:id' ,certificateController.deleteCertificates)
router.patch('/:id' ,certificateController.updateCertificates)

router.get('/:id',certificateController.getCertificate)

router.get('/generateCertificate/search',certificateController.searchGenerateCertificate)

module.exports  = router