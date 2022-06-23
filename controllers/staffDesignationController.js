const StaffDesignation = require('../models/StaffDesignation')
const Apifactory = require('../utils/apiFactory')

exports.getAllStaffDesignation = Apifactory.getAll(StaffDesignation)
exports.createStaffDesignation = Apifactory.create(StaffDesignation)
exports.deleteStaffDesignation = Apifactory.delete(StaffDesignation)
exports.updateStaffDesignation = Apifactory.update(StaffDesignation)