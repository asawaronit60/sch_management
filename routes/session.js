const SessionController = require('../controllers/sessionController')
const router = require('express').Router()


router.get('/getAllSession' ,SessionController.getAllSession)
router.post('/createSession' ,SessionController.createSession)
router.delete('/deleteSession/:id' ,SessionController.deleteSession)
router.patch('/updateSession/:id' ,SessionController.updateSession)


module.exports  = router