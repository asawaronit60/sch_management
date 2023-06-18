
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
exports.updateSmtpSetting =  async (req, res, next) => {

  try {

      req.body.is_active = true

       await emailSetting.smtpEmailSetting.update(req.body,{
      where:{
        id:1
      }
    })

    await emailSetting.awsSesEmailSetting.update({is_active:false},{
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


exports.getAwsSesSetting = getData(emailSetting.awsSesEmailSetting)

exports.updateAwsSesSetting =  async (req, res, next) => {

  try {

      req.body.is_active = true

       await emailSetting.awsSesEmailSetting.update(req.body,{
      where:{
        id:1
      }
    })

    await emailSetting.smtpEmailSetting.update({is_active:false},{
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