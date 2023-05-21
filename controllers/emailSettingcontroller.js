
const emailSetting = require('../models/EmailSettings')

let getData = (Model) => async (req, res, next) => {

  try {

    let data = await Model.findByPk(1)

    res.status(200).json({
      status: 'succes',
      data
    })

  } catch (err) {
    next(err)
  }

}

let updateData = (Model) => async (req, res, next) => {

  try {

       await Model.update(req.body,{
      where:{
        id:1
      }
    })

    res.status(200).json({
      status: 'succes',
      message:'Data updated successfully'
    })

  } catch (err) {
    next(err)
  }

}


exports.getSmtpSetting = getData(emailSetting.smtpEmailSetting)
exports.updateSmtpSetting = updateData(emailSetting.smtpEmailSetting)


exports.getAwsSesSetting = getData(emailSetting.awsSesEmailSetting)
exports.updateAwsSesSetting = updateData(emailSetting.awsSesEmailSetting)