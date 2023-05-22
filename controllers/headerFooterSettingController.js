const headerFooterSetting = require('../models/HeaderFooterSetting')
const multer = require('multer')

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/headerImages`)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }

})

const upload = multer({ storage }).fields([
  { name: 'fee_recipt_header', maxCount: 1 },
  { name: 'payslip_header', maxCount: 1 },
  { name: 'online_admission_header', maxCount: 1 },
  { name: 'online_exam_header', maxCount: 1 },

  { name: 'fee_recipt_footer', maxCount: 1 },
  { name: 'payslip_footer', maxCount: 1 },
  { name: 'online_admission_footer', maxCount: 1 },
  { name: 'online_exam_footer', maxCount: 1 }
])

exports.getFeeRecipt = async (req, res, next) => {
  try {
    let data = await headerFooterSetting.findByPk(1)

    res.status(200).json({
      status: 'success',
      data: {
        fee_recipt_header: data.getDataValue('fee_recipt_header'),
        fee_recipt_footer: data.getDataValue('fee_recipt_footer')
      }
    })

  } catch (err) {
    next(err)
  }
}

exports.updateFeeRecipt = async (req, res, next) => {
  try {

    upload(req, res, async (err) => {
      if (err) throw err


      if (req.files.fee_recipt_header) {
        req.body.fee_recipt_header = `/public/headerImages/${req.files.fee_recipt_header[0].filename}`
      }

      if (req.files.fee_recipt_footer) {
        req.body.fee_recipt_footer = `/public/headerImages/${req.files.fee_recipt_footer[0].filename}`
      }

      await headerFooterSetting.update(req.body, { where: { id: 1 } })

      res.status(200).json({
        status: 'success',
        message: 'updated successfully'
      })

    })

  } catch (err) {
    next(err)
  }
}


exports.getpayslip = async (req, res, next) => {
  try {
    let data = await headerFooterSetting.findByPk(1)

    res.status(200).json({
      status: 'success',
      data: {
        payslip_header: data.getDataValue('payslip_header'),
        payslip_footer: data.getDataValue('payslip_footer')
      }
    })

  } catch (err) {
    next(err)
  }
}

exports.updatepayslip = async (req, res, next) => {
  try {

    upload(req, res, async (err) => {
      if (err) throw err

      if (req.files.payslip_header) {
        req.body.payslip_header = `/public/headerImages/${req.files.payslip_header[0].filename}`
      }

      if (req.files.payslip_footer) {
        req.body.payslip_footer = `/public/headerImages/${req.files.payslip_footer[0].filename}`
      }

      await headerFooterSetting.update(req.body, { where: { id: 1 } })

      res.status(200).json({
        status: 'success',
        message: 'updated successfully'
      })

    })

  } catch (err) {
    next(err)
  }
}





exports.getOnlineAdmission = async (req, res, next) => {
  try {
    let data = await headerFooterSetting.findByPk(1)

    res.status(200).json({
      status: 'success',
      data: {
        online_admission_header: data.getDataValue('online_admission_header'),
        online_admission_footer: data.getDataValue('online_admission_footer')
      }
    })

  } catch (err) {
    next(err)
  }
}

exports.updateOnlineAdmission = async (req, res, next) => {
  try {

    upload(req, res, async (err) => {
      if (err) throw err


      if (req.files.online_admission_header) {
        req.body.online_admission_header = `/public/headerImages/${req.files.online_admission_header[0].filename}`
      }

      if (req.files.online_admission_footer) {
        req.body.online_admission_footer = `/public/headerImages/${req.files.online_admission_footer[0].filename}`
      }


      await headerFooterSetting.update(req.body, { where: { id: 1 } })

      res.status(200).json({
        status: 'success',
        message: 'updated successfully'
      })

    })

  } catch (err) {
    next(err)
  }
}



exports.getOnlineExam = async (req, res, next) => {
  try {
    let data = await headerFooterSetting.findByPk(1)

    res.status(200).json({
      status: 'success',
      data: {
        online_exam_header: data.getDataValue('online_exam_header'),
        online_exam_footer: data.getDataValue('online_exam_footer')
      }
    })

  } catch (err) {
    next(err)
  }
}

exports.updateOnlineExam = async (req, res, next) => {
  try {

    upload(req, res, async (err) => {
      if (err) throw err

      if (req.files.online_exam_header) {
        req.body.online_exam_header = `/public/headerImages/${req.files.online_exam_header[0].filename}`
      }

      if (req.files.online_exam_footer) {
        req.body.online_exam_footer = `/public/headerImages/${req.files.online_exam_footer[0].filename}`
      }

      await headerFooterSetting.update(req.body, { where: { id: 1 } })

      res.status(200).json({
        status: 'success',
        message: 'updated successfully'
      })

    })

  } catch (err) {
    next(err)
  }
}