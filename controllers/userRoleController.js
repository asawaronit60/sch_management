const UserRole = require('../models/UserRoles')
const ApiFactory = require('../utils/apiFactory')

exports.getAllUserRoles = ApiFactory.getAll(UserRole)
exports.createUserRole = ApiFactory.create(UserRole)
exports.deleteUserRole = ApiFactory.delete(UserRole)
exports.updateUserRole = ApiFactory.update(UserRole)