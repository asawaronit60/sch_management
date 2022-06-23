const DepartmentController = require('../controllers/departmentController')

const router = require('express').Router()


router.get('/' , DepartmentController.getAllDepartment)
router.post('/' , DepartmentController.createDepartment)
router.delete('/:id' , DepartmentController.deleteDepartment)
router.patch('/:id' , DepartmentController.updateDepartment)



module.exports  = router
