const Certificate = require('../models/Certificates')
const api = require('../utils/apiFactory')

exports.getAllCertificates = api.getAll(Certificate)
exports.createCertificates = api.create(Certificate)
exports.deleteCertificates = api.delete(Certificate)
exports.updateCertificates = api.update(Certificate)